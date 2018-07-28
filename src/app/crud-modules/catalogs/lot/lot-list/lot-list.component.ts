import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lot-list',
  templateUrl: './lot-list.component.html'
})
export class LotListComponent implements OnInit {
  value = '';
  showEmpty : boolean = false;
  sort_type : string = 'desc';
  displayedColumns = ['name', 'type', 'holesNumber','tablesNumber','quadrantsNumber','archesNumber'];
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

  _showLotSection(action,index){ /* mensaje de mostrar breadcrum de tab detalle o tab form*/
    const x = [action, index];
    this.showLot.emit(x);
  }
}
export interface element {
  name: string;
  type: string;
  holesNumber: number;
  tablesNumber: number;
  quadrantsNumber: number;
  archesNumber: number;

}
const ELEMENT_DATA: element[] = [
  {name: 'Lote 1', type: 'GH', holesNumber: 7, tablesNumber: 1, quadrantsNumber: 0, archesNumber: 3 },
  {name: 'Lote 2', type: 'GH', holesNumber: 3, tablesNumber: 2, quadrantsNumber: 4, archesNumber: 7 },
  {name: 'Lote 3', type: 'GH', holesNumber: 8, tablesNumber: 3, quadrantsNumber: 5, archesNumber: 2 },
  {name: 'Lote 4', type: 'GH', holesNumber: 9, tablesNumber: 4, quadrantsNumber: 2, archesNumber: 1 },
  {name: 'Lote 5', type: 'GH', holesNumber: 2, tablesNumber: 6, quadrantsNumber: 1, archesNumber: 8 }
];

