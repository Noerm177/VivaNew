import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-ground-form',
  templateUrl: './ground-form.component.html'
})
export class GroundFormComponent implements OnInit {
  editMode: boolean = false;
  private valueSelected: string = '';

  filteredOptions: Observable<string[]>;
  searchControl = new FormControl();
  options = [
    'Tirar producto'
  ];

  constructor(route:ActivatedRoute, private dialog: MatDialog) {
    //for new or edit mode
    this.determinateHeaders(route.snapshot.url[0].path);

    //search autocomplete
    this.filteredOptions = this.searchControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterUnit(val))
    );
  }

  ngOnInit() {
  }

  determinateHeaders(index){
    if( index == 'new'){
      this.editMode = false;
    }
    else{
      this.editMode = true;
    }
  }
  private selectedMethod($event){
    if($event.value == 1)
      this.valueSelected = 'clasificacion';
    else
      this.valueSelected = 'sustrato';
  }

  // function to options in SearchControl
  private filterUnit(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }


  private openDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      disableClose: true,
      autoFocus: false,
    });
      dialogRef.componentInstance.dialogIcon = 'warning-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer eliminar este suelo?';
      dialogRef.componentInstance.dialogMessage = 'Al eliminarlo ya no podrá ser consultado desde la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, eliminar';
      dialogRef.componentInstance.dialogColor = 'warn';
  }
}
