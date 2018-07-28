import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, DateAdapter, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Output } from '@angular/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _moment from 'moment';

const moment = _moment;

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'D/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM Y',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM Y'
  }
};

@Component({
  selector: 'stages-list',
  templateUrl: './stages-list.component.html',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class StagesListComponent implements OnInit {
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  addNewMode : boolean = false;

  displayedColumns = ['date', 'crop', 'density','plantsNumber','cycle'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  myControl: FormControl = new FormControl();

  date = new FormControl(moment());
  minDate = new Date();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() showLot = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  _sortByType(){
    this.sort_type = this.sort_type === 'asc' ? 'desc' : 'asc';
  }
  _clearFilter(){
    this.value = '';
    this.dataSource.filter= '';
    this.showEmpty = false;
  }
  applyFilter(filterValue: string) {
    this.showEmpty = false;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if(filterValue =='00'){ // xD Lo puse para que testearán
      this.showEmpty = true;
    }
  }

  _showStageSection(action,index){ /* mensaje de mostrar breadcrum de tab detalle o tab form*/
    const x = [action, index];
    this.showLot.emit(x);
  }
  _keyPress(event: any) {
    const pattern = /[0-9\.\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
export interface element {
  date: string;
  crop: string;
  density: number;
  plantsNumber: number;
  cycle: string;
}
const ELEMENT_DATA: element[] = [
  {date: '5/24/2018', crop: 'Tomate cherry', density: 1.23, plantsNumber: 4, cycle: 'Verano'},
  {date: '5/24/2018', crop: 'Tomate cherry', density: 1.23, plantsNumber: 1, cycle: 'Verano'},
  {date: '5/24/2018', crop: 'Tomate cherry', density: 1.23, plantsNumber: 3, cycle: 'Invierno'},
  {date: '5/24/2018', crop: 'Tomate cherry', density: 1.23, plantsNumber: 4, cycle: 'Verano'},
  {date: '5/24/2018', crop: 'Tomate cherry', density: 1.23, plantsNumber: 6, cycle: 'Verano'},
  {date: '5/24/2018', crop: 'Tomate cherry', density: 1.23, plantsNumber: 2, cycle: 'Verano'},
  {date: '5/24/2018', crop: 'Tomate cherry', density: 1.23, plantsNumber: 7, cycle: 'Verano'},

];
