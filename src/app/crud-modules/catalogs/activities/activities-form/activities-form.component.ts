import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-activities-form',
  templateUrl: './activities-form.component.html'
})
export class ActivitiesFormComponent implements OnInit {
  editMode: boolean = false;
  value = '';
  filteredOptions: Observable<string[]>;
  searchControl = new FormControl();

  options = [
    'Cubeta',
    'Saco',
    'Docenas'
  ];

  fruit = '';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  myControl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Tomate', 'Pepino', 'Chile'];

  @ViewChild('fruitInput') fruitInput: ElementRef;

  tiles: Tile[] = [
    {svg: 'alinear', remember: false ,status: false },
    {svg: 'apuntador', remember: false, status: false},
    {svg: 'planta-bajar', remember: false, status: false},
    {svg: 'canaleta-barrer', remember: true, status: false},
    {svg: 'planta-capar', remember: false, status: false},
    {svg: 'rastrear', remember: false, status: false},
    {svg: 'broto-capar', remember: true, status: false},
  ];

  constructor(route:ActivatedRoute, private dialog: MatDialog) {
    //for new or edit mode
    this.determinateHeaders(route.snapshot.url[0].path);
    //chips select
    this.filteredFruits = this.myControl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    //search autocomplete
    this.filteredOptions = this.searchControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterUnit(val))
    );
  }

  ngOnInit() {

  }

  _keyPress(event: any) {
    const pattern = /[0-9\.\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.myControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.myControl.setValue(null);
  }

  clearValue(){
    this.fruits = [];
  }

  // function to options in chip input
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  // function to options in SearchControl
  private filterUnit(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  determinateHeaders(index){
    if( index == 'new'){
      this.editMode = false;
    }
    else{
      this.editMode = true;
    }
  }

  private openDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      disableClose: true,
      autoFocus: false,
    });
      dialogRef.componentInstance.dialogIcon = 'warning-icon';
      dialogRef.componentInstance.dialogTitle = '¿Esta seguro de querer eliminarla?';
      dialogRef.componentInstance.dialogMessage = 'Al eliminar la actividad ya no se le podrá relacionar información en la plataforma.';
      dialogRef.componentInstance.dialogCancelBtnMsg = 'No';
      dialogRef.componentInstance.dialogAcceptBtnMsg = 'Si, eliminar';
      dialogRef.componentInstance.dialogColor = 'warn';
  }
}

export interface Tile {
  svg: string;
  remember: boolean;
  status: boolean;
}

