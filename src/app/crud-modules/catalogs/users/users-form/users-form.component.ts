import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html'
})
export class UsersFormComponent implements OnInit {
  error: boolean = false;
  value = '';
  fieldEmpty: boolean = false;
  editMode: boolean;
  selected: string;
  status: boolean;
  myControl: FormControl = new FormControl();

  options = [
    'Jorge Ramos',
    'Daniel Chocoteco',
    'Eduardo Meráz'
  ];

  filteredOptions: Observable<string[]>;

  constructor(route:ActivatedRoute) {
    this.determinateHeaders(route.snapshot.url[0].path);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }


  determinateHeaders(index){
    if( index == 'new'){
      this.editMode = false;
      this.myControl.enable();
    }
    else{
      this.editMode = true;
      this.value = 'Eduardo Meráz';
      this.myControl.disable();
    }
  }
}
