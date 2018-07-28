import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { CropsComponent } from './crops.component';
import { CropsListComponent } from './crops-list/crops-list.component';
import { CropsFormComponent } from './crops-form/crops-form.component';
import { CropsDetailComponent } from './crops-detail/crops-detail.component';

const routes: Routes = [
  {
    path: '', component: CropsComponent,
    children: [
      { path: '', component: CropsListComponent },
      { path: 'new', component: CropsFormComponent },
      { path: 'edit', component: CropsFormComponent },
      { path: 'detail', component: CropsDetailComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropsRoutingModule { }
