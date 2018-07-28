import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material.module';

// ROUTING
import { MainRoutingModule } from './main-routing.module';

// Core
import { CoreModule } from '../core/core.module';

// COMPONENTS
import { MainComponent } from './main.component';
import { ProfileUsersComponent } from '../crud-modules/profile-users/profile-users.component';
import { ChangePasswordDialogComponent } from '../crud-modules/profile-users/change-password-dialog/change-password-dialog.component';

@NgModule({
    imports: [
      CommonModule,
      MainRoutingModule,
      CoreModule
    ],
    exports: [],
    declarations: [
      MainComponent,
      ProfileUsersComponent,
      ChangePasswordDialogComponent
    ],
    entryComponents: [
      ChangePasswordDialogComponent
    ],
    bootstrap: [MainComponent]
})
export class MainModule {}
