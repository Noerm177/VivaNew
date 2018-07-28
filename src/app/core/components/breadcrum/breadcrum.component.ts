import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html'
})
export class BreadcrumComponent implements OnInit, OnDestroy {
  @Input() breadcrumbItems: IBreadcrum;
  private breadcrumbs: string;
  private subscription: Subscription;

  constructor(
    private router: Router,
  ) {
    this.subscribreRoute();
  }

  /**
   * Subscribe the route in order to get the title
   */
  subscribreRoute() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(
          this.router.routerState,
          this.router.routerState.root)
          .join('-');
        this.breadcrumbs = title;
      }
    });
  }

  /**
   * Get the state title.
   * In order to check the example link
   * @param state
   * @param parent
   * @link https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router
   */
  private getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  goTo() {
    this.router.navigate([this.breadcrumbItems.firstURL]);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

export interface IBreadcrum {
  rootTitle: string;
  firstTitle: string;
  firstURL: string;
}
