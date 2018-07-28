import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-operations-calendar',
  templateUrl: './operations-calendar.component.html',
  styleUrls: ['./operations-calendar.component.scss']
})
export class OperationsCalendarComponent implements OnInit {
  private defaultMode: boolean = true;
  constructor() { }

  ngOnInit() {}

  onChange($event){
    if($event){
      this.defaultMode = false;
    }
    else{
      this.defaultMode = true;
    }
  }
}
