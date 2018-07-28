import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'lot-detail',
  templateUrl: './lot-detail.component.html'
})
export class LotDetailComponent implements OnInit {
  changeStatus: boolean = false;
  @Output() showLot = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  _showLotSection(action,index){ /* mensaje de mostrar breadcrum para tab detalle o list*/
    const x = [action, index];
    this.showLot.emit(x);
  }
  openDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      disableClose: true,
      autoFocus: false,
    });
    if(this.changeStatus){
      dialogRef.componentInstance.dialogIcon = 'alert-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer inhabilitarlo?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitar el lote ya no se le podrá relacionar información en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitarlo?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitar el lote se le podrá relacionar información en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, habilitar';
      dialogRef.componentInstance.dialogColor = 'primary';
    }
    this.changeStatus= !this.changeStatus;
  }
}
