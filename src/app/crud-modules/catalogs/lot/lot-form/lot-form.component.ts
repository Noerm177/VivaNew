import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Output, Input } from '@angular/core';

@Component({
  selector: 'lot-form',
  templateUrl: './lot-form.component.html'
})
export class LotFormComponent implements OnInit {
  error: boolean = false;
  value = '';
  fieldEmpty: boolean = false;

  @Output() showLot = new EventEmitter<any>();
  @Input() editMode: boolean;

  constructor() { }


  ngOnInit() {
  }

  _showLotSection(action,index){ /* mensaje de mostrar breadcrum para tab detalle o list*/
    const x = [action, index];
    this.showLot.emit(x);
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
