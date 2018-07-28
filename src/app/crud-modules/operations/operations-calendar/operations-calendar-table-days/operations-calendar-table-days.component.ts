import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations-calendar-table-days',
  templateUrl: './operations-calendar-table-days.component.html',
  styleUrls: ['./operations-calendar-table-days.component.scss']
})
export class OperationsCalendarTableDaysComponent implements OnInit {
  private panelOpenState = false;

  private displayedColumns: string[] = ['name', 'group', 'sph', 'estimate'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  name: string;
  group: string;
  sph: number;
  estimate: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Ismael Ruíz Garza', group: '-', sph: 0, estimate: 0},
  {name: 'maria ruiz garza', group: '-', sph: 0, estimate: 0},
  {name: 'gina ruiz garza', group: '-', sph: 0, estimate: 0},
];
