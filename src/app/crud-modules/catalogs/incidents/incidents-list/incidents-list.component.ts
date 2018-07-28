import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html'
})
export class IncidentsListComponent implements OnInit {
  showProgressBar : boolean = false;
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  displayedColumns = ['name','area','description'];
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
  area: string;
  description: string;
}
const ELEMENT_DATA: element[] = [
  { name: 'Fuga de agua', area: 'Irrigación', description: 'Fuga de agua por daños en tubería.'},
];
