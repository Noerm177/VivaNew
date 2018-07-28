import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})

export class MainGuard implements CanActivate {

  constructor(
    private router: Router,
    private sesionService: SessionService
  ) {

  }

  canActivate(): boolean {
    return this.checkSessiontoken();
  }

  /**
   * Cchek the current token, if there isn't token go to login
   * @returns boolean
   */
  checkSessiontoken(): boolean {
    const token = this.sesionService.session;
    if (token) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

}
