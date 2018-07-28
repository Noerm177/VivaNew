import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsCalendarWorkersListComponent } from './operations-calendar-workers-list.component';

describe('OperationsCalendarWorkersListComponent', () => {
  let component: OperationsCalendarWorkersListComponent;
  let fixture: ComponentFixture<OperationsCalendarWorkersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsCalendarWorkersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsCalendarWorkersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
