import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-presentations-list',
  templateUrl: './presentations-list.component.html'
})
export class PresentationsListComponent implements OnInit {
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  displayedColumns = ['name', 'equivalent','price','related_fruit','business_unit'];
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
    setTimeout(() => {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      if(filterValue =='vacio'){ // xD Lo puse para que testearán
        this.showEmpty = true;
      }
    }, 1000);

  }
}
export interface element {
  name: string;
  equivalent: string;
  price: string;
  related_fruit: string;
  business_unit: string;
}
const ELEMENT_DATA: element[] = [
  { name: 'Cubeta', equivalent: '1 Kg', price: '$ 4.00', related_fruit: 'Pepino europeo', business_unit: 'Culiacán'},
  { name: 'Caja', equivalent: '88 g', price: '$ 3.00', related_fruit: 'Tomate cherry', business_unit: 'Culiacán'},
  { name: 'Bolsa', equivalent: '200 g', price: '$ 2.00', related_fruit: 'Chile', business_unit: 'Culiacán'},
  { name: 'Canasta', equivalent: '150 g', price: '$ 4.00', related_fruit: 'Pepino', business_unit: 'Culiacán'},
];
