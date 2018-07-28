import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CustomValidators } from '../../core/utilities/validators';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ITokenResponseMessage } from '../../data.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {

  private errorMessage: string = Messages.PasswordDoesNotMatch;
  private matchErrors = false;
  private resetRequestStatus = false;
  private showInvasiveLoader = false;
  private token = '';
  private resetPasswordForm = this.fb.group({
    password: new FormControl(
      '',
      Validators.compose([Validators.required, CustomValidators.passwordFormat])
    ),
    new_password: new FormControl(
      '',
      Validators.compose([Validators.required, CustomValidators.passwordFormat])
    )
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private session: SessionService,
    private authService: AuthenticationService,
  ) {
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    this.token = snapshot.root.queryParams['token'];
    if (!this.token) {
      this.router.navigate(['/auth']);
    }
  }

  ngOnInit() {
    this.checkToken();
  }

  /**
   * Check if the token is valid,
   * call onSuccessChecktoken and onCatchCheckToken
   */
  checkToken() {
    this.showInvasiveLoader = true;
    this.authService.checkToken(this.token)
    .then(this.onSuccessChecktoken.bind(this))
    .catch(this.onCatchCheckToken.bind(this));
  }

  private onSuccessChecktoken(response) {
    this.showInvasiveLoader = false;
  }

  private onCatchCheckToken(reason) {
    this.showInvasiveLoader = false;
    if (reason.status === 410) {
      this.resetRequestStatus = true;
    }
  }

  /**
   * Check if the form is valid
   * @returns boolean
   */
  isvalidForm(): boolean {
    const validForm = this.resetPasswordForm.valid;
    const password = this.resetPasswordForm.controls['password'].value;
    const confirmPassword = this.resetPasswordForm.controls['new_password'].value;
    this.errorMessage = 'La contraseña debe contener al menos 8 caracteres, '
    + 'de los cuales al menos uno tiene que ser número y uno tiene que ser una letra';

    return validForm && this.areEqualsPassword(password, confirmPassword);

  }

  areEqualsPassword(password: string, confirmPassword: string): boolean {
    this.errorMessage = Messages.PasswordDoesNotMatch;
    return password === confirmPassword;
  }

  /**
   * Make the request in order to set the password
   * call onSuccessChangePassword & onCatchChangePassword
   */
  makeRequest() {
    const params = this.resetPasswordForm.value;
    params.token = this.token;
    this.showInvasiveLoader = true;
    this.authService.changePassword(params)
    .then(this.onSuccessChangePassword.bind(this))
    .catch(this.onCatchChangePassword.bind(this));
  }

  onSuccessChangePassword(response: ITokenResponseMessage) {
    this.showInvasiveLoader = false;
    delete response.msg;
    this.session.session = response;
    this.router.navigate(['/main']);
  }

  onCatchChangePassword(reason) {
    this.showInvasiveLoader = false;
    this.matchErrors = true;
    if (reason.status === 410) {
      this.resetRequestStatus = true;
    }
  }

  doResetPassword() {
    if (this.isvalidForm()) {
      this.matchErrors = false;
      this.makeRequest();
    } else {
      this.matchErrors = true;
    }

  }

}

enum Messages {
  PasswordDoesNotMatch = 'Las contraseñas deben coincidir, favor de verificar.'
}

