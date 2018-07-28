import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./sass/all.scss']
})
export class AuthenticationComponent implements OnInit {
  loader: boolean = false;
  constructor() { }

  ngOnInit() {

  }

}
