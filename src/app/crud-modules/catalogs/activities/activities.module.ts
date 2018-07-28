import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORE
import { CoreModule } from '../../../core/core.module';

// Routing
import { ActivitiesRoutingModule } from './activities-routing.module';

//components
import { ActivitiesComponent } from './activities.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesFormComponent } from './activities-form/activities-form.component';
import { ActivitiesDetailComponent } from './activities-detail/activities-detail.component';


@NgModule({
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    CoreModule
  ],
  declarations: [
    ActivitiesComponent,
    ActivitiesListComponent,
    ActivitiesFormComponent,
    ActivitiesDetailComponent
  ]
})
export class ActivitiesModule { }
