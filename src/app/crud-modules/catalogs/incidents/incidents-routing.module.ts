import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentsComponent } from './incidents.component';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { IncidentsFormComponent } from './incidents-form/incidents-form.component';
import { IncidentsDetailComponent } from './incidents-detail/incidents-detail.component';

const routes: Routes = [
  { path: '', component: IncidentsComponent,
    children: [
      { path: '', component: IncidentsListComponent, data: { title : ''}},
      { path: 'new', component: IncidentsFormComponent, data: { title : 'Nueva incidencia'}},
      { path: 'detail', component: IncidentsDetailComponent, data: { title : 'Detalle de incidencia'}},
      { path: 'edit', component: IncidentsFormComponent, data: { title : 'Editar incidencia'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
