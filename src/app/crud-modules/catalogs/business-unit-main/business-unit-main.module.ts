import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { CoreModule } from '../../../core/core.module';

import { BusinessUnitMainRoutingModule } from './business-unit-main-routing.module';

// components
import { BusinessUnitMainComponent } from './business-unit-main.component';
import { BusinessUnitMainDetailComponent } from './business-unit-main-detail/business-unit-main-detail.component';

// external components
import { LotListComponent } from '../lot/lot-list/lot-list.component';
import { LotFormComponent } from '../lot/lot-form/lot-form.component';
import { LotDetailComponent } from '../lot/lot-detail/lot-detail.component';
import { StagesListComponent } from '../stages/stages-list/stages-list.component';
import { PackagesListComponent } from '../packages/packages-list/packages-list.component';
import { PackagesFormComponent } from '../packages/packages-form/packages-form.component';
import { PackagesDetailComponent } from '../packages/packages-detail/packages-detail.component';
import { LinesListComponent } from '../lines/lines-list/lines-list.component';
import { LinesFormComponent } from '../lines/lines-form/lines-form.component';


@NgModule({
  imports: [
    CommonModule,
    BusinessUnitMainRoutingModule,
    CoreModule
  ],
  declarations: [
    BusinessUnitMainComponent,
    BusinessUnitMainDetailComponent,
    LotListComponent,
    LotFormComponent,
    LotDetailComponent,
    StagesListComponent,
    PackagesListComponent,
    PackagesFormComponent,
    PackagesDetailComponent,
    LinesListComponent,
    LinesFormComponent
  ]
})
export class BusinessUnitMainModule { }
