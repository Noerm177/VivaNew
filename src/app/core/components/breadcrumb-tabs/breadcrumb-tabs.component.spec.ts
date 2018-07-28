import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTabsComponent } from './breadcrumb-tabs.component';

describe('BreadcrumbTabsComponent', () => {
  let component: BreadcrumbTabsComponent;
  let fixture: ComponentFixture<BreadcrumbTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
