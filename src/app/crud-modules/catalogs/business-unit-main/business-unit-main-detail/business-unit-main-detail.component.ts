import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BusinessUnitMainService } from '../business-unit-main.service';
import { IBusinessUnit } from '../../../../core/Interfaces/BusinessUnit';
import { MapComponent } from '../../../../core/components/map/map.component';
import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-business-unit-main-detail',
  templateUrl: './business-unit-main-detail.component.html'
})
export class BusinessUnitMainDetailComponent implements OnInit, OnDestroy {
  @ViewChild(MapComponent) map: MapComponent;

  public changeStatus = true;
  public id: number;
  private routeSubs: Subscription;
  private businessUnit: IBusinessUnit;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private service: BusinessUnitMainService
  ) { }

  ngOnInit() {
    this.routeSubs = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.loading(true);
      this.service.getBusinessUnit(this.id)
      .then(this.onSuccessBusinessUnit.bind(this))
      .catch(this.onCatchBusinessUnit.bind(this));
    });
  }

  ngOnDestroy() {
    this.routeSubs.unsubscribe();
  }

  onSuccessBusinessUnit(response) {
    this.service.loading(false);
    this.businessUnit = response;
    this.service.loadBussinesUnitName(this.businessUnit.name);
    this.map.drawInitialPolygon(this.businessUnit.polygon);
  }

  onCatchBusinessUnit(reason) {
    this.service.loading(false);
    console.error('REASON: ', reason);
  }

  // TODO: REMOVE THIS THING!!!
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      disableClose: true,
      autoFocus: false,
    });

    if (this.changeStatus) {
      dialogRef.componentInstance.dialogIcon = 'alert-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de que desea inhabilitar esta unidad de negocio?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitarla no se podrá acceder a la información ligada a ella.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'Cancelar';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Aceptar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else {
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de que desea habilitar esta unidad de negocio?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitarla se podrá acceder a la información ligada a ella.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'Cancelar';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Aceptar';
      dialogRef.componentInstance.dialogColor = 'primary';
    }
    dialogRef.afterClosed().subscribe(result => {
      if (result.data) {
        this.changeStatus = !this.changeStatus;
      }
    });
  }
}
