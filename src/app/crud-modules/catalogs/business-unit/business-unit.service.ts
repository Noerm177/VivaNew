import { Paths } from '../../../core/apis/paths';
import { DataService } from '../../../data.service';
import { Injectable, EventEmitter } from '@angular/core';
import { IBusinessUnit } from '../../../core/Interfaces/BusinessUnit';

@Injectable({
  providedIn: 'root'
})
export class BusinessUnitService {
  public isLoading = new EventEmitter<boolean>();
  public showMessageBar = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  /**
   * Make request in order to create a Bussines Unit
   * @param : IBusinessUnit
   * @returns : Promise<IBusinessUnit>
   */
  public createBusinessUnit(params: IBusinessUnit): Promise<IBusinessUnit> {
    const url = Paths.businessUnit;
    return this.dataService.post(url, params).toPromise();
  }

  /**
   * Make request in order to create a Bussines Unit
   * @param : IBusinessUnit
   * @returns : Promise<IBusinessUnit>
   */
  public editBusinessUnit(params: IBusinessUnit, id: number): Promise<IBusinessUnit> {
    const url = `${Paths.businessUnit}/${id}`;
    return this.dataService.put(url, params).toPromise();
  }

  /**
   * Make request in order to get a list of  Bussines Unit
   * @returns : Promise<IBusinessUni[]t>
   */
  public getBusinessUnit(): Promise<IBusinessUnit[]> {
    return this.dataService.get(Paths.businessUnit).toPromise();
  }

  /**
   * Make request in order to get a Bussines Unit
   * @param id : number
   * @returns : Promise<IBusinessUnit>
   */
  public getBusinessUnitById(id: number): Promise<IBusinessUnit> {
    const path = `${Paths.businessUnit}/${id}`;
    return this.dataService.get(path).toPromise();
  }

  public loading(v: boolean) {
    this.isLoading.emit(v);
  }

  public showMessage(v: string) {
    this.showMessageBar.emit(v);
  }

}

