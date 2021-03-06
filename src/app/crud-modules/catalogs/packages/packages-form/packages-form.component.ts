import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'packages-form',
  templateUrl: './packages-form.component.html'
})
export class PackagesFormComponent implements OnInit {
  error: boolean = false;
  value = '';
  fieldEmpty: boolean = false;

  @Output() showLot = new EventEmitter<any>();
  @Input() editMode: boolean;

  constructor() { }

  ngOnInit() {
  }
  _showPackageSection(action,index){ /* mensaje de mostrar breadcrum para tab detalle o list*/
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
