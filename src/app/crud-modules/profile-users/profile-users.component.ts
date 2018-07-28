import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

//component
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-profile-users',
  templateUrl: './profile-users.component.html',
  styleUrls: ['./profile-users.component.scss']
})
export class ProfileUsersComponent implements OnInit {
  showMessageBar: boolean = false;
  changeStatus: boolean = false;
  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
  }
  openDialog() {
    this.showMessageBar= false;
    let dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '475px',
      disableClose: true,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.data)
       this.showMessageBar= true;
    });
  }

}
