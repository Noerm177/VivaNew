import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { CoreModule } from '../../../core/core.module';

// Routing
import { PackagingRoutingModule } from './packaging-routing.module';

// Components
import { PackagingComponent } from './packaging.component';
import { PackagingListComponent } from './packaging-list/packaging-list.component';
import { PackagingFormComponent } from './packaging-form/packaging-form.component';
import { PackagingDetailComponent } from './packaging-detail/packaging-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PackagingRoutingModule,
    CoreModule
  ],
  declarations: [
    PackagingComponent,
    PackagingListComponent,
    PackagingFormComponent,
    PackagingDetailComponent
  ]
})
export class PackagingModule { }
