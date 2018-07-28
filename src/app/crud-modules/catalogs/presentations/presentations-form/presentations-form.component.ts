import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../core/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-presentations-form',
  templateUrl: './presentations-form.component.html'
})
export class PresentationsFormComponent implements OnInit {
  editMode: boolean = false;
  private imageUrl = '';
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
      this.imageUrl = '/assets/img/green-bg.png';
    }
  }
  _keyPress(event: any) {
    const pattern = /[0-9\.\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
