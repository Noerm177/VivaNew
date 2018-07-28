import { Injectable } from '@angular/core';
import { DataService , IResponseMessage, IToken, ITokenResponseMessage } from '../data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private dataService: DataService
  ) { }

  /**
   * Make login request
   * @param credentials { username: string, password: string }
   * @returns Promise<IToken>
   */
  public login(credentials: { email: string, password: string }): Promise<IToken> {
    return this.dataService.login(credentials).toPromise();
  }

  /**
   * Make recovery password request
   * @param recoveryObject { email: string }
   * @returns Promise<IResponseMessage>
   */
  public recoveryPassword(recoveryObject: { email: string }): Promise<IResponseMessage> {
    return this.dataService.recoverPassword(recoveryObject).toPromise();
  }

  /**
   * Make change password
   * @param passwordObject { token: string, password: string }
   */
  public changePassword(passwordObject: { token: string, password: string } ): Promise<ITokenResponseMessage> {
    return this.dataService.resetPassword(passwordObject).toPromise();
  }

  /**
   * Check if the token is valid
   * @param token string
   */
  public checkToken(token: string): Promise<IResponseMessage> {
    return this.dataService.checkToken(token).toPromise();

  }

}
