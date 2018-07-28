import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-presentations-detail',
  templateUrl: './presentations-detail.component.html'
})
export class PresentationsDetailComponent implements OnInit {
  private changeStatus: boolean = true;
  imageUrl = '/assets/img/green-bg.png';
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
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer inhabilitar la presentación?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitarla está no podrá ser consultada en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitar la presentación';
      dialogRef.componentInstance.dialogMessage = 'Al habilitarla está podrá ser consultada en la plataforma.';
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
