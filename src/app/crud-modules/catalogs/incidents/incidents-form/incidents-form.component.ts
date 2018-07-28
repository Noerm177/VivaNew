import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incidents-form',
  templateUrl: './incidents-form.component.html'
})
export class IncidentsFormComponent implements OnInit {
  private editMode: boolean = false;

  constructor(route:ActivatedRoute) {
    //for new or edit mode
    this.determinateHeaders(route.snapshot.url[0].path);
  }

  ngOnInit() {
  }
  determinateHeaders(index){
    if( index == 'new'){
      this.editMode = false;
    }
    else{
      this.editMode = true;
    }
  }
}
