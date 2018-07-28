import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements OnInit {
  @Input() dialogIcon: string;
  @Input() dialogTitle: string;
  @Input() dialogMessage: string;
  @Input() dialogCancelBtnMsg: string;
  @Input() dialogAcceptBtnMsg: string;
  @Input() dialogColor: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit() {
  }
  accept() {
    this.dialogRef.close({ data: true });
  }
  close() {
    this.dialogRef.close({ data: false });
  }
}
