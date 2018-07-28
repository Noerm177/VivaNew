import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-crops-detail',
  templateUrl: './crops-detail.component.html'
})
export class CropsDetailComponent implements OnInit {
  cropIsActive = true;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


  private openDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      disableClose: true,
      autoFocus: false,
    });
    if(this.cropIsActive){
      dialogRef.componentInstance.dialogIcon = 'alert-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer inhabilitarlo?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitar el cultivo este ya no podrá ser consultado en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitarlo?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitar el cultivo este podrá ser consultado en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, habilitar';
      dialogRef.componentInstance.dialogColor = 'primary';
    }
    dialogRef.afterClosed().subscribe(result => {
      if(result.data)
       this.cropIsActive= !this.cropIsActive;
    });
  }
}
