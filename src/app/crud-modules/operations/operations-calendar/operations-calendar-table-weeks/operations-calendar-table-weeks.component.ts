import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations-calendar-table-weeks',
  templateUrl: './operations-calendar-table-weeks.component.html',
  styleUrls: ['./operations-calendar-table-weeks.component.scss']
})
export class OperationsCalendarTableWeeksComponent implements OnInit {
  private items = 7;
  weekend = ['Domingo', 'Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado'];

  constructor() { }

  ngOnInit() {
  }

}
