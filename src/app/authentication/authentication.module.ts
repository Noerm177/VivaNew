import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

// Routing
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Core
import { CoreModule } from '../core/core.module';

// COMPONENTS
import { AuthenticationComponent } from './authentication.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    CoreModule
  ],
  declarations: [
    AuthenticationComponent,
    LoginFormComponent,
    RecoverPasswordComponent,
    ResetPasswordComponent
  ]
})
export class AuthenticationModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('visibility-outline', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/visibility.svg'));
    iconRegistry.addSvgIcon('visibility-outline_off', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/visibility_off.svg'));
  }
}
