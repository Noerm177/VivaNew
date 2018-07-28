import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORE
import { CoreModule } from '../../../core/core.module';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsComponent } from './incidents.component';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { IncidentsFormComponent } from './incidents-form/incidents-form.component';
import { IncidentsDetailComponent } from './incidents-detail/incidents-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    CoreModule
  ],
  declarations: [IncidentsComponent, IncidentsListComponent, IncidentsFormComponent, IncidentsDetailComponent]
})
export class IncidentsModule { }
