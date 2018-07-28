import { MapService } from './map.service';
import { IMapParams, ICoordinates } from '../../Interfaces/Maps';
import { Component, AfterViewInit, Output, Input, ElementRef, ViewEncapsulation, EventEmitter } from '@angular/core';
declare var google: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {
  @Output() drawingFinish = new EventEmitter<IMapParams>();
  @Input() input: ElementRef;

  private map: any;
  private drawingManager: any;
  private polygon: any;
  private geocoder: any;
  public params: IMapParams = {
    surface: 0,
    perimeter: 0,
    state: '',
    coordinates: []
  };

  constructor() { }

  ngAfterViewInit() {
    MapService.load().then(() => {
      this.setUp();
    });
  }

  /**
  * Set up google map, center the map in México
  */
  setUp() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      zoomControl: true,
      disableDefaultUI: true,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      center: { lat: 23.837990, lng: -102.961835 }
    });
    this.geocoder = new google.maps.Geocoder;
    this.setUpAutocomplete();
  }

  /**
  * Draw a initialize polygon
  * NOTE: there are an issue when load google for the firts time,
  * that's why I use a try catch
  * @param coords : ICoordinates[]
  */
  public drawInitialPolygon(coords: ICoordinates[], editable?: boolean ) {
    try {
      const bounds = new google.maps.LatLngBounds();
      this.map.setValues({draggable: false});
      coords.forEach(item => {
        const latLng =  new google.maps.LatLng(item.lat, item.lng);
        bounds.extend(latLng);
      });

      this.polygon = new google.maps.Polygon({
        paths: coords,
        strokeColor: '#FFFFFF',
        fillOpacity: 0.0,
        editable: editable ? editable : false,
      });
      this.map.fitBounds(bounds);
      this.polygon.setMap(this.map);

      this.polygon.getPaths().forEach((path, index) => {
        google.maps.event.addListener(path, 'insert_at', this.onPolygonEdited.bind(this));
        google.maps.event.addListener(path, 'remove_at', this.onPolygonEdited.bind(this));
        google.maps.event.addListener(path, 'set_at', this.onPolygonEdited.bind(this));
      });
    } catch (e) {
      console.log('ERROR: waiting for the map.... try again');
    }
  }

  /**
   * Get polygon coords
   * @returns ICoordinates
   */
  getInitialPolygonCoords(): ICoordinates[] {
    const coords = this.polygon.getPath().getArray().map(item => {
      return { lat: item.lat(), lng: item.lng() };
    });
    return coords;
  }

  /**
  * Set up Autocomplete if there are  an input
  */
  setUpAutocomplete() {
    if (!this.input) { return; }
    const autocomplete = new google.maps.places.Autocomplete((this.input), {types: ['(regions)']});
    const places = new google.maps.places.PlacesService(this.map);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        this.map.panTo(place.geometry.location);
        this.map.setZoom(11);
      }
    });
  }

  /**
  * Add Polygon tool in the map
  */
  drawPolygon() {
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      },
      polygonOptions: {
        editable: false,
        strokeColor: '#FFFFFF',
        fillOpacity: 0.0
      }
    });

    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      this.polygon = event;
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        this.setPropeties(event);
        this.stopDrawing();
      }
    });

  }

  /**
  * Set the properties in ara, perimeter and coordinates,
  * map event.overlay.getPath().getArray() in order to get the correct json.
  * call the emit when finish geoCoder
  * @param event any I dont know what is the even interface for google maps
  */
  setPropeties(event: any) {
    this.params.coordinates = event.overlay.getPath().getArray().map(item => {
      return { lat: item.lat(), lng: item.lng() };
    });
    const latLng = {'location': this.params.coordinates[0]};
    this.params.surface = google.maps.geometry.spherical.computeArea(event.overlay.getPath());
    this.params.perimeter = google.maps.geometry.spherical.computeLength(event.overlay.getPath());
    this.geocoder.geocode(latLng, this.onGeocode.bind(this));
  }

  /**
   * Emit the event when the polygon was edited
   */
  onPolygonEdited() {
    this.params.surface = google.maps.geometry.spherical.computeArea(this.polygon.getPath());
    this.params.perimeter = google.maps.geometry.spherical.computeLength(this.polygon.getPath());
    this.params.coordinates = this.getInitialPolygonCoords();
    const latLng = {'location': this.params.coordinates[0]};
    this.geocoder.geocode(latLng, this.onGeocode.bind(this));
  }

  /**
  * Call when geoder ends
  * @param result
  * @param status
  */
  private onGeocode(result, status) {
    if (status === 'OK') {
      if (result[0]) {
        const stateName = this.getStateName(result[0]);
        this.params.state = stateName;
      }
    }
    this.drawingFinish.emit(this.params);
  }

  /**
  * Get state name from the google maps API results
  * @param result
  */
  private getStateName(result: any): string {
    let stateName = '';
    result.address_components.forEach(value => {
      value.types.forEach(type => {
        if (type === 'administrative_area_level_1') {
          stateName = value.long_name;
        }
      });
    });
    return stateName;
  }

  private stopDrawing() {
    this.drawingManager.setDrawingMode(null);
  }

  /**
  * Clean map and delet the coordinates
  */
  public deleteNodes() {
    if (this.polygon) {
      if (this.polygon.overlay) {
        this.polygon.overlay.setMap(null);
      } else {
        this.polygon.setMap(null);
      }
    }
    this.params.coordinates = [];
    this.drawingManager = null;
  }

  /**
  * Start drawing, check if there are coordinates and drawingManager isn't null
  */
  public startDrawing() {
    if (!this.drawingManager && this.params.coordinates.length === 0) {
      this.drawPolygon();
    }
  }

}

