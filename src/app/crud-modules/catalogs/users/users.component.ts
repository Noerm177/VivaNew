import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  private breadcrumbs: string;
  constructor(router:Router, activatedRoute:ActivatedRoute) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        this.breadcrumbs = title;
      }
    });
  }

  ngOnInit() {
  }

  getTitle(state, parent) { /* https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router */
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
