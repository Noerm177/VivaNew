import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  showProgressBar : boolean = false;
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  displayedColumns = ['id', 'name', 'lastname','role','email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  myControl: FormControl = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

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
  id: string;
  name: string;
  lastname: string;
  role: string;
  email: string;

}
const ELEMENT_DATA: element[] = [
  {id: '000001', name: 'Ismael', lastname: 'Martínez Ramírez', role: 'Supervisor Junior', email: 'example@vivasmart.com' },
  {id: '000002', name: 'Israel', lastname: 'Mendez Ramírez', role: 'Supervisor Senior', email: 'example@vivasmart.com' },
  {id: '000003', name: 'Daniela', lastname: 'Gutierrez Ramírez', role: 'Coordinador', email: 'example@vivasmart.com' },
  {id: '000004', name: 'Jorge', lastname: 'Martínez Melendez', role: 'Supervisor Junior', email: 'example@vivasmart.com' },
  {id: '000005', name: 'Emma', lastname: 'Huerta Ramírez', role: 'Supervisor Junior', email: 'example@vivasmart.com' }
];
