import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { DataService } from '../data.service';
import { HttpModule } from '@angular/http';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let dataService: DataService;
  const params = { email: 'jair.pinedo@yopmail.com' };

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
      imports: [ HttpModule ]
    });
    service = TestBed.get(AuthenticationService);
    dataService = TestBed.get(DataService);
  });

});


