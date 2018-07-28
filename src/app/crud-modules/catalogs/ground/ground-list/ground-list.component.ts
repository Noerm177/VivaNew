import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ground-list',
  templateUrl: './ground-list.component.html'
})
export class GroundListComponent implements OnInit {
  showProgressBar = false;
  value = '';
  showEmpty = false;
  sort_type = 'desc';
  displayedColumns = ['name', 'type'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  myControl: FormControl = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  _sortByType() {
    this.sort_type = this.sort_type === 'asc' ? 'desc' : 'asc';
  }

  _clearFilter() {
    this.value = '';
    this.dataSource.filter = '';
    this.showEmpty = false;
  }

  applyFilter(filterValue: string) {
    this.showEmpty = false;
    this.showProgressBar = true;
    setTimeout(() => {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      if (filterValue === 'vacio') { // xD Lo puse para que testearán
        this.showEmpty = true;
      }
      this.showProgressBar = false;
    }, 1000);

  }
}

export interface element {
  name: string;
  type: string;
}

const ELEMENT_DATA: element[] = [
  { name: 'Suelo hidropónico', type: 'Suelo' },
  { name: 'Suelo hidropónico', type: 'Sustrato' },
  { name: 'Suelo hidropónico', type: 'Sustrato' }
];
