import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessUnitMainComponent } from './business-unit-main.component';

const routes: Routes = [
  { path: '', component: BusinessUnitMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessUnitMainRoutingModule { }
