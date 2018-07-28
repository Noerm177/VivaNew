import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-tabs',
  templateUrl: './breadcrumb-tabs.component.html'
})
export class BreadcrumbTabsComponent implements OnInit {

  @Input() items: IBreadcrumbTabs[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo(url: string) {
    if (url) {
      this.router.navigate([url]);
    }
  }

  /**
   * Check if the item is the last one
   * @returns boolean
   * @param index
   */
  isLastItem(index: number): boolean {
    if (index === this.items.length - 1) {
      return true;
    } else {
      return false;
    }
  }

}

export interface IBreadcrumbTabs {
  title: string;
  url?: string;
}
