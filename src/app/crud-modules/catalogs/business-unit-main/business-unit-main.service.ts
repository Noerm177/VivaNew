import { Paths } from '../../../core/apis/paths';
import { DataService } from '../../../data.service';
import { Injectable, EventEmitter } from '@angular/core';
import { IBusinessUnit } from '../../../core/Interfaces/BusinessUnit';

@Injectable({
  providedIn: 'root'
})
export class BusinessUnitMainService {
  public isLoading = new EventEmitter<boolean>();
  public businessUnitName = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  /**
   * Make request in order to get a Bussines Unit
   * @param id : number
   * @returns : Promise<IBusinessUnit>
   */
  public getBusinessUnit(id: number): Promise<IBusinessUnit> {
    const path = `${Paths.businessUnit}/${id}`;
    return this.dataService.get(path).toPromise();
  }

  public loading(v: boolean) {
    this.isLoading.emit(v);
  }

  public loadBussinesUnitName(name: string) {
    this.businessUnitName.emit(name);
  }

}
