import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ICrops } from '../crops-interfaces';

@Component({
  selector: 'app-crops-list',
  templateUrl: './crops-list.component.html'
})
export class CropsListComponent implements OnInit {
  // table elements
  sort_type = 'desc';
  displayedColumns = ['name', 'variety', 'presentations'];
  dataSource = new MatTableDataSource<ICrops>(FAKE_DATA);
  showEmpty = false;

  // search input
  value = '';
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;

  // progress bar
  showProgressBar = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
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

  _clearFilter() {
    this.value = '';
    this.dataSource.filter = '';
    this.showEmpty = false;
  }

  _sortByType() {
    this.sort_type = this.sort_type === 'asc' ? 'desc' : 'asc';
  }
}

const FAKE_DATA: ICrops[] = [
  { name: 'Pepino Europeo', variety: 'Parmeno', presentations: 'Chico, Mediano, Grande' },
  { name: 'Pepino Europeo', variety: 'Parmeno', presentations: 'Chico, Mediano' },
  { name: 'Tomate Cherry', variety: 'Roja', presentations: 'Chico' }
];
