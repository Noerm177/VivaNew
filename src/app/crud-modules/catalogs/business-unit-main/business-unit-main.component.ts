import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { IBreadcrumbTabs } from '../../../core/components/breadcrumb-tabs/breadcrumb-tabs.component';
import { BusinessUnitMainService } from './business-unit-main.service';

@Component({
  selector: 'app-business-unit-main',
  templateUrl: './business-unit-main.component.html'
})
export class BusinessUnitMainComponent implements OnInit, OnDestroy {

  private isLoading = false;
  private businessUnitName: string;
  public loadingSubscription: Subscription;
  public nameSubscription: Subscription;
  private breadcrumbsItems: IBreadcrumbTabs[] = [];
  private tabs = [BussinesUnitTabs.BusinesUnit];

  constructor(private service: BusinessUnitMainService) { }

  ngOnInit() {
    this.loadingSubscription = this.onLoadingSubs();
    this.nameSubscription = this.onBusinessUnitNameSubs();
    this.setBreadcrumbsItems();
  }

  onBusinessUnitNameSubs(): Subscription {
    return this.service.businessUnitName.subscribe((value) => {
      this.businessUnitName = value;
      this.breadcrumbsItems.push({title: this.businessUnitName});
    });
  }

  onLoadingSubs(): Subscription {
    return this.service.isLoading.subscribe((value) => {
      this.isLoading = value;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
    this.nameSubscription.unsubscribe();
  }

  setBreadcrumbsItems() {
    this.breadcrumbsItems = [
      {title: 'Catálogos'},
      {title: BussinesUnitTabs.BusinesUnit, url: 'main/business-unit'}
    ];
  }

  onTabChange(event: MatTabChangeEvent) {

  }

}

// NOTE: In order to add new tabs in DOM just push a BussinesUnitTabs in tabs
enum BussinesUnitTabs {
  BusinesUnit = 'Unidades de negocio',
  Lot = 'Lotes',
  NewLot = 'Nuevo lote',
  LotDetail =  'Lote Detalle',
  EditLot =  'Edición de Lote',
  Stages =  'Etapas',
  Packages = 'P. de empaques',
  NewPackages =  'Nueva P. de empaques',
  EditPackages =   'Edición de Planta de C.S.',
  PackagesDetail =  'Planta de C.S.',
  Lines =  'Líneas',
  NewLine =  'Nueva línea'
}
