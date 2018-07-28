import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../core/utilities/validators';
import { AuthenticationService } from '../authentication.service';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  // Properties
  private hide = false; // show and hide password
  private loginErrors = false; // show and hide login errors
  private showInvasiveLoader = false;

  private loginForm = this.fb.group({
    email: new FormControl(
      '',
       Validators.compose([Validators.required, CustomValidators.mailFormat])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required])
    )
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private session: SessionService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  private doLogin() {
    if (this.loginForm.invalid) {
      this.loginErrors = true;
    } else {
      this.loginErrors = false;
      this.makeRequest();
    }
  }

  /**
   * Make request, when success go to home view and save session
   */
  private makeRequest() {
    this.showInvasiveLoader = true;
    this.authService.login(this.loginForm.value).then((response) => {
      this.showInvasiveLoader = false;
      this.session.session = response;
      this.router.navigate(['/main']);
    }).catch((error) => {
      this.showInvasiveLoader = false;
      this.loginErrors = true;
    });
  }

}
