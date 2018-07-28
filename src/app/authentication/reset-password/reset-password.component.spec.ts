import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { SessionService } from '../../session.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ResetPasswordComponent } from './reset-password.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  const successPass = { password: '12345678a', new_password: '12345678a'};
  const failurePass = { password: '12345678', new_password: '12345678'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordComponent ],
      imports: [CoreModule, RouterModule, HttpModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [SessionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

