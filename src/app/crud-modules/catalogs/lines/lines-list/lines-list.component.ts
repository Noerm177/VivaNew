import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lines-list',
  templateUrl: './lines-list.component.html'
})
export class LinesListComponent implements OnInit {
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  displayedColumns = ['name', 'crop', 'bankNumber'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  myControl: FormControl = new FormControl();

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

  _showLineSection(action,index){ /* mensaje de mostrar breadcrum de tab detalle o tab form*/
    const x = [action, index];
    this.showLot.emit(x);
  }
}
export interface element {
  name: string;
  crop: string;
  bankNumber: number;

}
const ELEMENT_DATA: element[] = [
  {name: 'Línea 1', crop: 'Tomate', bankNumber: 7},
  {name: 'Línea 2', crop: 'Pepino', bankNumber: 2},
  {name: 'Línea 3', crop: 'Tomate cherry', bankNumber: 4},
  {name: 'Línea 4', crop: 'Zarzamora', bankNumber: 1},
];
