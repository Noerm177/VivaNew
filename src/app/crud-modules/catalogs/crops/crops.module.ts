import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { CoreModule } from '../../../core/core.module';

// Routing
import { CropsRoutingModule } from './crops-routing.module';

// Components
import { CropsComponent } from './crops.component';
import { CropsListComponent } from './crops-list/crops-list.component';
import { CropsFormComponent } from './crops-form/crops-form.component';
import { CropsDetailComponent } from './crops-detail/crops-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CropsRoutingModule,
    CoreModule
  ],
  declarations: [
    CropsComponent,
    CropsListComponent,
    CropsFormComponent,
    CropsDetailComponent
  ]
})
export class CropsModule { }
