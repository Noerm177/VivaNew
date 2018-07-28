import { Router } from '@angular/router';
import { MainService } from './main.service';
import { SessionService } from '../session.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css/all.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit {
  sidenavIsOpen = false;
  userImageUrl = './assets/img/user.svg';

  constructor(
    private session: SessionService,
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  _openMenu() {
    this.sidenavIsOpen = !this.sidenavIsOpen;
  }

  logout() {
    this.mainService.logout();
    this.router.navigate(['/auth']);
  }

}
