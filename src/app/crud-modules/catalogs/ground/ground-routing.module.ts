import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroundComponent } from './ground.component';
import { GroundListComponent } from './ground-list/ground-list.component';
import { GroundFormComponent } from './ground-form/ground-form.component';
import { GroundDetailComponent } from './ground-detail/ground-detail.component';

const routes: Routes = [
  { path: '', component: GroundComponent,
    children: [
      { path: '', component: GroundListComponent, data: { title : ''}},
      { path: 'new', component: GroundFormComponent, data: { title : 'Nueva base'}},
      { path: 'detail/:id', component: GroundDetailComponent, data: { title : 'Detalle de base'}},
      { path: 'edit', component: GroundFormComponent, data: { title : 'Editar base'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroundRoutingModule { }
