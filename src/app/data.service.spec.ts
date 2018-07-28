import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { SessionService } from './session.service';
import { TestBed, inject } from '@angular/core/testing';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, SessionService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

});
