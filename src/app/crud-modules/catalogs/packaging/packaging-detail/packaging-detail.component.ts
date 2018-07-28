import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-packaging-detail',
  templateUrl: './packaging-detail.component.html'
})

export class PackagingDetailComponent implements OnInit {
  imageUrl = '/assets/img/green-bg.png';
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
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer inhabilitar el empaque?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitarlo este no podrá ser consultado en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitar el empaque?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitarlo este podrá ser consultado en la plataforma.';
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
