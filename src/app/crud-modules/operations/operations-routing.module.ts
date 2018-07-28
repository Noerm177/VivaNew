import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationsComponent } from './operations.component';
import { OperationsCalendarComponent } from './operations-calendar/operations-calendar.component';

const routes: Routes = [
  { path: '', component: OperationsComponent,
  children: [
    { path: '', component: OperationsCalendarComponent, data: { title : 'Programar'}},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
