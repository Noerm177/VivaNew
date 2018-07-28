import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'packages-detail',
  templateUrl: './packages-detail.component.html'
})
export class PackagesDetailComponent implements OnInit {
  changeStatus: boolean = true;
  @Output() showLot = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  _showPackageSection(action,index){
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
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer inhabilitarla?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitar la P. de empaque ésta ya no podrá ser consultada en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitarla?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitar la P. de empaque ésta podrá ser consultada en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, habilitar';
      dialogRef.componentInstance.dialogColor = 'primary';
    }
    dialogRef.afterClosed().subscribe(result => {
      if(result.data)
       this.changeStatus= !this.changeStatus;
    });
  }
}
