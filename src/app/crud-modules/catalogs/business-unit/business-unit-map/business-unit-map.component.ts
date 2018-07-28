import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BusinessUnitService } from '../business-unit.service';
import { IBusinessUnit } from '../../../../core/Interfaces/BusinessUnit';
import { of } from 'rxjs';

@Component({
  selector: 'app-business-unit-map',
  templateUrl: './business-unit-map.component.html'
})
export class BusinessUnitMapComponent implements OnInit {
  public businessUnits: IBusinessUnit[] = [];
  public selectedBusinessUnit?: IBusinessUnit;

  constructor(
    private router: Router,
    private service: BusinessUnitService
  ) { }

  ngOnInit() {
    this.getBussinesUnit();
  }

  /**
   * Get business unit, call onBusinessUnitSuccess & onBusinessUnitError
   */
  getBussinesUnit() {
    this.service.loading(true);
    this.service.getBusinessUnit()
    .then(this.onBusinessUnitSuccess.bind(this))
    .catch(this.onBusinessUnitError.bind(this));
  }

  onBusinessUnitSuccess(response: IBusinessUnit[]) {
    this.service.loading(false);
    this.businessUnits = response;
  }

  onBusinessUnitError(reason) {
    this.service.loading(false);
    console.log('ERROR: when get businessUnit', reason);
  }

  searchChanges(value: IBusinessUnit) {
    if (value) {
      this.selectedBusinessUnit = value;
    } else {
      this.selectedBusinessUnit = null;
    }

  }

  goToDetail() {
    this.router.navigate(['/main/business-unit-detail', this.selectedBusinessUnit.id]);
  }

}
