import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { CoreModule } from '../../../core/core.module';

// Routing
import { BusinessUnitRoutingModule } from './business-unit-routing.module';

// Components
import { BusinessUnitComponent } from './business-unit.component';
import { BusinessUnitFormComponent } from './business-unit-form/business-unit-form.component';
import { BusinessUnitMapComponent } from './business-unit-map/business-unit-map.component';



@NgModule({
  imports: [
    CommonModule,
    BusinessUnitRoutingModule,
    CoreModule
  ],
  declarations: [
    BusinessUnitFormComponent,
    BusinessUnitMapComponent,
    BusinessUnitComponent
  ]
})
export class BusinessUnitModule { }
