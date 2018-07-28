import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

const routes: Routes = [
  { path: '', component: UsersComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'new', component: UsersFormComponent, data: { title : 'Nuevo usuario'} },
      { path: 'detail', component: UsersDetailComponent, data: { title : 'Detalle de usuario'}},
      { path: 'edit', component: UsersFormComponent, data: { title : 'Editar usuario'} },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
