import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagingComponent } from './packaging.component';
import { PackagingListComponent } from './packaging-list/packaging-list.component';
import { PackagingFormComponent } from './packaging-form/packaging-form.component';
import { PackagingDetailComponent } from './packaging-detail/packaging-detail.component';

const routes: Routes = [
  {
    path: '', component: PackagingComponent,
    children: [
      { path: '', component: PackagingListComponent, data: { title : ''} },
      { path: 'new', component: PackagingFormComponent, data: { title : 'Nuevo empaque'}},
      { path: 'edit', component: PackagingFormComponent , data: { title : 'Detalle de empaque'}},
      { path: 'detail', component: PackagingDetailComponent, data: { title : 'Editar empaque'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagingRoutingModule { }
