import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html'
})
export class UsersDetailComponent implements OnInit {
  changeStatus: boolean = true;
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
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer inhabilitarlo?';
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitar al usuario éste ya no podrá acceder a la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, Inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitarlo?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitar al usuario éste podrá acceder a la plataforma.';
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
