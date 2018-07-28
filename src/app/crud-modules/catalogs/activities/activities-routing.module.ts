import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ActivitiesComponent } from './activities.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesFormComponent } from './activities-form/activities-form.component';
import { ActivitiesDetailComponent } from './activities-detail/activities-detail.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent,
    children: [
      { path: '', component: ActivitiesListComponent },
      { path: 'new', component: ActivitiesFormComponent },
      { path: 'detail', component: ActivitiesDetailComponent },
      { path: 'edit', component: ActivitiesFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
