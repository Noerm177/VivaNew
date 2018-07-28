import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitiesDetailComponent } from './activities-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatDialogModule } from '@angular/material';

describe('ActivitiesDetailComponent', () => {
  let component: ActivitiesDetailComponent;
  let fixture: ComponentFixture<ActivitiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesDetailComponent ],
      imports: [RouterTestingModule, RouterModule, BrowserAnimationsModule, MatIconModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
