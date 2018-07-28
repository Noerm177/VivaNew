import { MainService } from './main.service';
import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { SessionService } from '../session.service';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainService, SessionService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));
});
