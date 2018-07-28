import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operations-calendar-header',
  templateUrl: './operations-calendar-header.component.html',
  styleUrls: ['./operations-calendar-header.component.scss']
})
export class OperationsCalendarHeaderComponent implements OnInit {
  private labelChecked: string = 'Semana';
  private labelIsChecked: boolean = true;

  @Output() changeView = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  getChecked(){
    if(!this.labelIsChecked){
      this.labelChecked = 'Semana';
    }
    else{
      this.labelChecked = 'Día';
    }

    this.labelIsChecked = !this.labelIsChecked;
  }

  _showCalendarSection(){
    if(!this.labelIsChecked)
      this.changeView.emit(false);
    else
      this.changeView.emit(true);
  }
}
