import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private session: SessionService
  ) { }

  /**
   * Logout user
   */
  logout() {
    this.session.removeSession();
  }
}
