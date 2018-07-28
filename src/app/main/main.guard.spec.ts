import { MainGuard } from './main.guard';
import { RouterModule } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '../session.service';

describe('MainGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ MainGuard, SessionService ],
      imports: [RouterModule, RouterTestingModule]
    });
  });

  it('should ...', inject([MainGuard], (guard: MainGuard) => {
    expect(guard).toBeTruthy();
  }));
});
