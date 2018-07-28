import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatMenuModule, MatDividerModule, MatToolbarModule, MatListModule, MatSidenavModule } from '@angular/material';
import { SessionService } from '../session.service';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [
        RouterTestingModule,
        MatIconModule, MatMenuModule,
        MatDividerModule, MatToolbarModule,
        MatListModule, MatSidenavModule,
        BrowserAnimationsModule, HttpModule
      ],
      providers: [SessionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
