import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'packages-list',
  templateUrl: './packages-list.component.html'
})
export class PackagesListComponent implements OnInit {
  showProgressBar : boolean = false;
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  displayedColumns = ['name', 'lineNumber'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  myControl: FormControl = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() showLot = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
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
  _showPackageSection(action,index){
    const x = [action, index];
    this.showLot.emit(x);
  }

}
export interface element {
  name: string;
  lineNumber: number;

}
const ELEMENT_DATA: element[] = [
  {name: 'Planta de C.S.', lineNumber: 2},
  {name: 'Planta 2', lineNumber: 1},
  {name: 'Planta 3', lineNumber: 7},
  {name: 'Planta 5', lineNumber: 6},
  {name: 'Planta 6', lineNumber: 5},
  {name: 'Planta 1', lineNumber: 4},
];
