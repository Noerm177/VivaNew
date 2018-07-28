export interface IMapParams {
  surface: number;
  state: string;
  perimeter: number;
  coordinates: Array<ICoordinates>;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}
