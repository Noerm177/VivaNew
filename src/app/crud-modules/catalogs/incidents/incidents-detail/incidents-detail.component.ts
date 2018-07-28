import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-incidents-detail',
  templateUrl: './incidents-detail.component.html'
})
export class IncidentsDetailComponent implements OnInit {
  private changeStatus: boolean = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      disableClose: true,
      autoFocus: false,
    });
    if(this.changeStatus){
      dialogRef.componentInstance.dialogIcon = 'alert-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer inhabilitar la incidencia?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitarlá está no podrá ser consultado en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitar la incidencia?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitarla está podrá ser consultado en la plataforma.';
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
