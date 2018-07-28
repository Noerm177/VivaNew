import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { CoreModule } from '../../core/core.module';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { OperationsCalendarComponent } from './operations-calendar/operations-calendar.component';
import { OperationsCalendarHeaderComponent } from './operations-calendar/operations-calendar-header/operations-calendar-header.component';
import { OperationsCalendarTableWeeksComponent } from './operations-calendar/operations-calendar-table-weeks/operations-calendar-table-weeks.component';
import { OperationsCalendarWorkersListComponent } from './operations-calendar/operations-calendar-workers-list/operations-calendar-workers-list.component';
import { OperationsCalendarTasksListComponent } from './operations-calendar/operations-calendar-tasks-list/operations-calendar-tasks-list.component';
import { OperationsCalendarTableDaysComponent } from './operations-calendar/operations-calendar-table-days/operations-calendar-table-days.component';

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule,
    CoreModule
  ],
  declarations: [OperationsComponent, OperationsCalendarComponent, OperationsCalendarHeaderComponent, OperationsCalendarTableWeeksComponent, OperationsCalendarWorkersListComponent, OperationsCalendarTasksListComponent, OperationsCalendarTableDaysComponent]
})
export class OperationsModule { }
