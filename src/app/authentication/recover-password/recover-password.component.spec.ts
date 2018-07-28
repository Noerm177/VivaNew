import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { SessionService } from '../../session.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoverPasswordComponent } from './recover-password.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('RecoverPasswordComponent', () => {
  let component: RecoverPasswordComponent;
  let fixture: ComponentFixture<RecoverPasswordComponent>;
  const email = 'jair.pinedo@yopmail.com';
  const invalidEmail = 'jai.pinedo@yopmail';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverPasswordComponent ],
      imports: [ BrowserAnimationsModule, CoreModule, RouterModule, HttpModule, RouterTestingModule ],
      providers: [SessionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPasswordComponent);
    component = fixture.componentInstance;
    component.recoveryPasswordForm.controls['email'].setValue(email);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is valid form', () => {
    expect(component.isInvalidForm()).toBeFalsy();
  });

  it('is invalid form', () => {
    component.recoveryPasswordForm.controls['email'].setValue(invalidEmail);
    expect(component.isInvalidForm()).toBeTruthy();
  });

});

