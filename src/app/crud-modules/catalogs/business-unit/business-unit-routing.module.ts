import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BusinessUnitComponent } from './business-unit.component';
import { BusinessUnitMapComponent } from './business-unit-map/business-unit-map.component';
import { BusinessUnitFormComponent } from './business-unit-form/business-unit-form.component';

const routes: Routes = [
    { path: '', component: BusinessUnitComponent,
    children: [
      { path: '', component: BusinessUnitMapComponent, data: { title : ''}},
      { path: 'new', component: BusinessUnitFormComponent, data: { title : 'Nueva unidad de negocio'} },
      { path: 'edit/:id', component: BusinessUnitFormComponent, data: { title : 'Edición de unidad de negocio'} }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessUnitRoutingModule { }
