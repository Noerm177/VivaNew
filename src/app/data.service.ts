import { Paths } from './core/apis/paths';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SessionService } from './session.service';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Properties
  private SERVER_URL = environment.api.url;
  private WEB_URL = environment.api.webUrl;

  constructor(
    private http: Http,
    private session: SessionService
  ) { }

  // Methods

  /**
  * Make an HTTP request as POST in order to authenticate the user
  * @param params URLSearchParams
  * @returns Observable<T>
  */
  public login(params: { email: string, password: string } ): Observable<any> {
    const headers = new Headers({'Content-Type':  'application/json'});
    const url = this.SERVER_URL + Paths.login;

    const observable: Observable<Response> = this.http.post(
      url, params, { headers: headers }).pipe(map(response => response.json()));
    return observable;
  }

  /**
   * Make the request in order to send an email with the recovery pass instructions
   * add the link that user should open with the email.
   * @param recoveryObj { email: string }
   * @returns Observable<IResponseMessage>
   */
  public recoverPassword(recoveryObj: { email: string }): Observable<IResponseMessage> {
    const headers = new Headers({'Content-Type':  'application/json'});
    const url = this.SERVER_URL + Paths.recoveryPassword;
    const params = recoveryObj;

    const observable = this.http.post(
      url, params, { headers: headers })
      .pipe(
        map(response => response.json()),
        catchError(this.handlerError())
      );
    return observable;
  }

  /**
   * Make the request in order to change the password & add the token in headers
   * @param recoveryObj { token: string, password: string }
   */
  public resetPassword(params: { token: string, password: string }): Observable<ITokenResponseMessage> {
    const headers = new Headers({'Content-Type':  'application/json'});
    const url = this.SERVER_URL + Paths.changePassword;

    const observable = this.http.post(
      url, params, { headers: headers })
      .pipe(
        map(response => response.json()),
        catchError(this.handlerError())
      );

    return observable;
  }

  /**
   * Make a POST request with a generic type
   * @param url string
   * @param params
   * @param headers Headers?
   */
  public post(url: string, params): Observable<any> {
    const headers = new Headers();
    const token = btoa('BROWSER' + ':' + this.session.session.token);
    headers.set('Authorization', `Basic ${token}`);
    url = this.SERVER_URL + url;

    const observable = this.http.post(
      url, params, { headers: headers }).pipe(map(response => response.json()));

    return observable;
  }

  /**
   * Make a PUT request with a generic type
   * @param url string
   * @param params
   * @param headers Headers?
   */
  public put(url: string, params): Observable<any> {
    const headers = new Headers();
    const token = btoa('BROWSER' + ':' + this.session.session.token);
    headers.set('Authorization', `Basic ${token}`);
    url = this.SERVER_URL + url;

    const observable = this.http.put(
      url, params, { headers: headers }).pipe(map(response => response.json()));

    return observable;
  }

  /**
   * Make a GET request
   * @param url string
   * @param params? URLSearchParams
   */
  public get(url: string, params?: URLSearchParams): Observable<any> {
    const headers = new Headers();
    const token = btoa('BROWSER' + ':' + this.session.session.token);
    headers.set('Authorization', `Basic ${token}`);
    url = this.SERVER_URL + url;

    const observable = this.http.get(
      url, { search: params, headers: headers }).pipe(map(response => response.json()));

    return observable;
  }

  /**
   * Make a GET request in order to check the token
   * @param url string
   * @param params? URLSearchParams
   */
  public checkToken(token: string): Observable<any> {
    const headers = new Headers();
    const url = `${this.SERVER_URL}${Paths.checkToken}/${token}`;

    const observable = this.http.get(
      url, { headers: headers })
      .pipe(
        map(response => response.json()),
        catchError(this.handlerError())
      );

    return observable;
  }

  /**
   * Handler the error an return the json as IResponseMessage
   */
  private handlerError() {
    return (err: any) => {
      return throwError({...err.json(), status : err.status });
    };
  }

}

export interface IResponseMessage {
  msg: string;
}

export interface IToken {
  token: string;
}

export interface ITokenResponseMessage {
  msg: string;
  token: string;
}
