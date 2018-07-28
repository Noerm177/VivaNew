import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html'
})
export class ActivitiesListComponent implements OnInit {
  showProgressBar : boolean = false;
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  displayedColumns = ['name', 'code', 'unit', 'cost', 'businessUnit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  myControl: FormControl = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    this.showProgressBar = true;
    setTimeout(() => {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      if(filterValue =='vacio'){ // xD Lo puse para que testearán
        this.showEmpty = true;
      }
      this.showProgressBar = false;
    }, 1000);

  }
}
export interface element {
  name: string;
  code: string;
  unit: string;
  cost: string;
  businessUnit: string;
}
const ELEMENT_DATA: element[] = [
  { name: 'Ismael Martínez Ramírez', code: '00001', unit: 'Cubeta', cost: '10.50', businessUnit: 'Unidad de negocio' },
  { name: 'Rogelio Martínez Ramírez', code: '00002', unit: 'Cubeta', cost: '10.50', businessUnit: 'Unidad de negocio' },
  { name: 'Daniel López Ramírez', code: '00003', unit: 'Cubeta', cost: '10.50', businessUnit: 'Unidad de negocio' },
  { name: 'Georgina Meráz Ramírez', code: '00004', unit: 'Cubeta', cost: '10.50', businessUnit: 'Unidad de negocio' },
  { name: 'Hector Herrera Ramírez', code: '00005', unit: 'Cubeta', cost: '10.50', businessUnit: 'Unidad de negocio' },
  { name: 'Pablo Martínez Figueroa', code: '00006', unit: 'Cubeta', cost: '10.50', businessUnit: 'Unidad de negocio' },
];
