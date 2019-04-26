import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {
title:string="Confirm";
subTitle:string="Confirm";
buttonCancelName:string="Cancel";
buttonConfirmName:string="Ok";
constructor( @Inject(MAT_DIALOG_DATA) public data: any) { 
  if (data) {
    this.title = data.title ? data.title : this.title;
    this.subTitle = data.subTitle ? data.subTitle : this.subTitle;
    this.buttonCancelName = data.buttonCancelName ? data.buttonCancelName : this.buttonCancelName;
    this.buttonConfirmName = data.buttonConfirmName ? data.buttonConfirmName : this.buttonConfirmName;
  }

}

  ngOnInit() {
  }

}
