import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {
  title:string="Success";
subTitle:string="Confirm";
buttonConfirmName:string="Ok";
constructor( @Inject(MAT_DIALOG_DATA) public data: any) { 
  if (data) {
    this.title = data.title ? data.title : this.title;
    this.subTitle = data.subTitle ? data.subTitle : this.subTitle;
    this.buttonConfirmName = data.buttonConfirmName ? data.buttonConfirmName : this.buttonConfirmName;
  }
}
  ngOnInit() {
  }

}
