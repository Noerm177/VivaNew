import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-packaging-form',
  templateUrl: './packaging-form.component.html'
})

export class PackagingFormComponent implements OnInit {
  private isEditionMode = false;
  private imageUrl = '';
  private complexityLevelOptions = [1, 2, 3, 4, 5];
  private packagingForm = this.fb.group({
    name: new FormControl(''),
    code: new FormControl(''),
    bussinnesUnit: new FormControl(''),
    material: new FormControl(''),
    crop: new FormControl(''),
    weight: new FormControl(''),
    category: new FormControl(''),
    complexityLevel: new FormControl(''),
    averageTimeHours: new FormControl(''),
    averageTimeMinutes: new FormControl('')
  });

  constructor(
    private fb: FormBuilder,
    route:ActivatedRoute,
    private dialog: MatDialog
  ) {
    //for new or edit mode
    this.determinateHeaders(route.snapshot.url[0].path);
  }

  ngOnInit() {}

  /**
   * Clear business unit field
   */
  private clearBusinessInput() {
    this.packagingForm.controls['bussinnesUnit'].setValue('');
  }

  private _keyPress(event: any) {
    const pattern = /[0-9\.\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  private determinateHeaders(index){
    if( index == 'new'){
      this.isEditionMode = false;
    }
    else{
      this.isEditionMode = true;
      this.imageUrl = '/assets/img/green-bg.png';
    }
  }
  private openDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      disableClose: true,
      autoFocus: false,
    });
      dialogRef.componentInstance.dialogIcon = 'warning-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer Eliminar el empaque?';
      dialogRef.componentInstance.dialogMessage = 'Al eliminarlo esté no podrá ser consultado en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, eliminar';
      dialogRef.componentInstance.dialogColor = 'warn';
  }
}
