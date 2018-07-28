import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IPackaging } from '../packaging-interfaces';

@Component({
  selector: 'app-packaging-list',
  templateUrl: './packaging-list.component.html'
})

export class PackagingListComponent implements OnInit {
  showProgressBar : boolean = false;

  // table elements
  sortType = 'desc';
  displayedColumns = ['name', 'weight', 'crop', 'businessUnit', 'category'];
  dataSource = new MatTableDataSource<IPackaging>(FAKE_DATA);
  showEmpty = false;

  // search input
  value = '';
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;

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
      if(filterValue =='vacio'){ // xD Lo puse para que testearán
        this.showEmpty = true;
      }
      this.showProgressBar = false;
    }, 1000);

  }
  _clearFilter(){
    this.value = '';
    this.dataSource.filter= '';
    this.showEmpty = false;
  }
}

const FAKE_DATA: IPackaging[] = [
  { name: 'Name', weight: 80, crop: 'cultivo', businessUnit: 'Unidad de negocio', category: 'category' }
];
