import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crops-form',
  templateUrl: './crops-form.component.html'
})
export class CropsFormComponent implements OnInit {
  private editMode: boolean;

  constructor(route:ActivatedRoute) {
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
