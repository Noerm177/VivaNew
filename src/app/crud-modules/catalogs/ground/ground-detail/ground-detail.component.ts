import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-ground-detail',
  templateUrl: './ground-detail.component.html'
})
export class GroundDetailComponent implements OnInit {
  private changeStatus: boolean = true;
  private groundMode: boolean;

  constructor(route:ActivatedRoute, private dialog: MatDialog) {
    //for new or edit mode
    this.determinateHeaders(route.snapshot.url[1].path);
  }

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
      dialogRef.componentInstance.dialogMessage = 'Al inhabilitar el suelo este ya no podrá ser consultado en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, inhabilitar';
      dialogRef.componentInstance.dialogColor = 'warn';
    } else{
      dialogRef.componentInstance.dialogIcon = 'success-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer habilitarlo?';
      dialogRef.componentInstance.dialogMessage = 'Al habilitar el suelo este podrá ser consultado en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, habilitar';
      dialogRef.componentInstance.dialogColor = 'primary';
    }
    dialogRef.afterClosed().subscribe(result => {
      if(result.data)
       this.changeStatus= !this.changeStatus;
    });
  }
  determinateHeaders(index){

    if( index == 1){
      this.groundMode = true;
    }
    else{
      this.groundMode = false;
    }

  }
}
