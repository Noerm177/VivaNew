import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { CustomValidators } from '../../core/utilities/validators';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  // Properties
  private showInvasiveLoader = false;
  private recoveryRequestStatus = false; // show success message
  private errors = false; // show and hide form errors
  recoveryPasswordForm = this.fb.group({
    email: new FormControl(
      '',
      Validators.compose([Validators.required, CustomValidators.mailFormat])
    )
  });

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() { }

  // methods

  doRecovery() {

    if (!this.isInvalidForm()) {
      this.makeRequest();
    }

  }

  isInvalidForm(): boolean {
    if (this.recoveryPasswordForm.invalid) {
      this.errors = true;
    } else {
      this.errors = false;
    }
    return this.errors;
  }

  private makeRequest() {
    const email = this.recoveryPasswordForm.value;
    this.showInvasiveLoader = true;
    this.authService.recoveryPassword(email)
    .then(response => {
      console.log('RESPONSE: ', response );
      this.showInvasiveLoader = false;
      this.recoveryRequestStatus = true;
    })
    .catch(reason => {
      console.log('REASON: ', reason );
      this.showInvasiveLoader = false;
      this.errors = true;
    });
  }

}
