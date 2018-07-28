import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { IBreadcrum } from '../../../core/components/breadcrum/breadcrum.component';
import { BusinessUnitService } from './business-unit.service';
import { Subscription } from 'rxjs';
import { MessageBarComponent } from '../../../core/components/message-bar/message-bar.component';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html'
})

export class BusinessUnitComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MessageBarComponent) messageBar: MessageBarComponent;

  public isLoading = false;
  public loadingSubs: Subscription;
  public showMessageSubs: Subscription;

  public breadcrum: IBreadcrum = {
    rootTitle: 'Catálogos',
    firstTitle: 'Unidades de negocio',
    firstURL: '/main/business-unit'
  };

  constructor(
    private service: BusinessUnitService
  ) {
  }

  ngOnInit() {
    this.loadingSubs = this.service.isLoading.subscribe((value) => {
      this.isLoading = value;
    });

    this.showMessageSubs = this.service.showMessageBar.subscribe((value) => {
      this.messageBar.showMessage(value, true);
    });

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }


}
