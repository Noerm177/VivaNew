import { NgModule } from '@angular/core'
import { RouterModule, Routes, Router } from '@angular/router'

// Components
import { AuthenticationComponent } from './authentication.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', component: LoginFormComponent },
      { path: 'recover-password', component: RecoverPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationRoutingModule {}
