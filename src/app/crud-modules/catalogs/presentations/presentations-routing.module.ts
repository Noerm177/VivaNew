import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationsComponent } from './presentations.component';
import { PresentationsListComponent } from './presentations-list/presentations-list.component';
import { PresentationsDetailComponent } from './presentations-detail/presentations-detail.component';
import { PresentationsFormComponent } from './presentations-form/presentations-form.component';


const routes: Routes = [
  { path: '', component: PresentationsComponent,
    children: [
      { path: '', component: PresentationsListComponent, data: { title : ''}},
      { path: 'new', component: PresentationsFormComponent, data: { title : 'Nueva presentación'}},
      { path: 'detail', component: PresentationsDetailComponent, data: { title : 'Detalle de presentación'}},
      { path: 'edit', component: PresentationsFormComponent, data: { title : 'Editar presentación'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationsRoutingModule { }
