import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent implements OnInit {
  private errors: boolean = false;
  private checking: boolean = false;
  constructor(
    private dialogRef: MatDialogRef<ChangePasswordDialogComponent>
  ) { }

  ngOnInit(){
  }
  accept(){
    setTimeout(() => {
      this.checking = !this.checking;
      this.errors = true;
    }, 500);

    setTimeout(() => {
      this.errors = false;
    }, 3500);

    setTimeout(() => {
      this.checking = !this.checking;
      this.dialogRef.close({ data: true});
    }, 5500);
  }
  close(){
    this.dialogRef.close();
  }
}
