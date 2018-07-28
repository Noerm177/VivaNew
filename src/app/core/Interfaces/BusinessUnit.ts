export interface IBusinessUnit {
  id: number;
  name: string;
  perimeter: number;
  polygon: IPolygon[];
  state: string;
  surface: number;
  lot_no: number;
  packinghouse_no: number;
}

export interface IPolygon {
  lat: number;
  lng: number;
}
