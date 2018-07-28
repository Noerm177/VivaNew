import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessUnitService } from '../business-unit.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { IBusinessUnit } from '../../../../core/Interfaces/BusinessUnit';
import { ICoordinates, IMapParams } from '../../../../core/Interfaces/Maps';
import { MapComponent } from '../../../../core/components/map/map.component';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-business-unit-form',
  templateUrl: './business-unit-form.component.html'
})

/**
 * NOTE: I had to hablder the are adn distance error manually becasue they are disabled inputs
 */
export class BusinessUnitFormComponent implements OnInit, OnDestroy {

  @ViewChild(MapComponent) map: MapComponent;
  @ViewChild('searchInput') searchInput: ElementRef;

  private state = '';
  private id: number;
  private editMode = false; // added to switch editMode to new/edit
  private isLoading = false;
  private routeSubs: Subscription;
  private coordinates: Array<ICoordinates> = [];
  private businessUnit: IBusinessUnit;
  public errors = { name: false, surface: false, perimeter: false };

  private businessUnitForm = this.fb.group({
    name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
    surface:  new FormControl('', Validators.required),
    perimeter: new FormControl('', Validators.required)
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private businessUnitService: BusinessUnitService
  ) { }

  ngOnInit() {
    this.routeSubs = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.loading(true);
        this.editMode = true;
        this.businessUnitService.getBusinessUnitById(this.id)
        .then(this.onSuccessGetBusinessUnit.bind(this))
        .catch(this.onErrorBusinessUnit.bind(this));
      }
    });
  }

  ngOnDestroy() {
    this.routeSubs.unsubscribe();
  }

  /**
   * Create or edit a bussines unit
   * NOTE: the validation are in makeRequest method
   */
  createOrEditBusinessUnit() {
    if (this.validForm()) {
      this.errors = { name: false, surface: false, perimeter: false };
      this.makeRequest();
    }
  }

  validForm() {
    this.errors.name = this.businessUnitForm.controls.name.value === '' || null ? true : false;
    this.errors.surface = this.businessUnitForm.controls.surface.value === '' || null ? true : false;
    this.errors.perimeter = this.businessUnitForm.controls.perimeter.value === '' || null ? true : false;

    return this.businessUnitForm.valid;
  }

  makeRequest() {
    this.loading(true);
    const params = {
      ...this.businessUnitForm.value,
      polygon: this.coordinates,
      state: this.state
    };
    let promise: Promise<IBusinessUnit>;

    if (this.editMode) {
      promise = this.businessUnitService.editBusinessUnit(params, this.id);
    } else {
      promise = this.businessUnitService.createBusinessUnit(params);
    }

    promise
    .then(this.onSuccessCreateBusinessUnit.bind(this))
    .catch(this.onErrorBusinessUnit.bind(this));

  }

  // On Promes responses

  onSuccessCreateBusinessUnit(response: IBusinessUnit) {
    this.loading(false);
    if (this.editMode) {
      this.businessUnitService.showMessage('Unidad de negocio actualizada satisfactoriamente');
    }
    setTimeout(() => {
      this.router.navigate(['/main/business-unit-detail', response.id]);
    }, 1000);

  }

  onErrorBusinessUnit(reason) {
    this.loading(false);
    console.error('ERROR: Bussines Unit Request', reason);
  }

  onSuccessGetBusinessUnit(response: IBusinessUnit) {
    this.loading(false);
    this.businessUnit = response;
    this.coordinates = response.polygon;
    this.state = response.state,
    this.fillForm();
    this.map.drawInitialPolygon(this.businessUnit.polygon, true);
    console.log('RESPONSE: ', response);
  }

  fillForm() {
    this.businessUnitForm.controls['name'].setValue(this.businessUnit.name);
    this.businessUnitForm.controls['surface'].setValue(this.businessUnit.surface);
    this.businessUnitForm.controls['perimeter'].setValue(this.businessUnit.perimeter);
  }

  /**
   * Fill form with the mapParams and set coordinates
   * @param mapParams IMapParams
   */
  onDrawingFinish(mapParams: IMapParams) {
    const name = this.businessUnitForm.controls['name'].value;
    this.coordinates = mapParams.coordinates;
    delete mapParams.coordinates;
    this.state = mapParams.state;
    delete mapParams.state;
    const params = { ...mapParams, name: name };
    this.businessUnitForm.setValue(params);
  }

  /**
   * Clear input area, input distance and coordinates
   */
  clearMapParams() {
    this.coordinates = [];
    this.businessUnitForm.controls['surface'].setValue('');
    this.businessUnitForm.controls['perimeter'].setValue('');
  }

  startDrawing() {
    this.map.startDrawing();
  }

  delete() {
    this.map.deleteNodes();
    this.clearMapParams();
  }

  loading(v: boolean) {
    this.businessUnitService.loading(v);
    this.isLoading = v;
  }

}
