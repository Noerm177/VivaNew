import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  public set session(v) {
    localStorage.setItem('session', JSON.stringify(v));
  }

  public get session(): IToken {
    return JSON.parse(localStorage.getItem('session'));
  }

  public removeSession() {
    localStorage.clear();
  }

}

export interface IToken {
  token: string;
}
