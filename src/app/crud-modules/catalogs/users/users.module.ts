import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORE
import { CoreModule } from '../../../core/core.module';

// ROUTING
import { UsersRoutingModule } from './users-routing.module';

// COMPONENTS
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule
  ],
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    UsersDetailComponent,
    UsersComponent
  ]
})
export class UsersModule { }
