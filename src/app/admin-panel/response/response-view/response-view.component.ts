import { Component, OnInit,Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-response-view',
  templateUrl: './response-view.component.html',
  styleUrls: ['./response-view.component.scss']
})
export class ResponseViewComponent implements OnInit {
  received_data: any = {};
  constructor(
   public dialogRef: MatDialogRef<ResponseViewComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  ngOnInit() {
    this.received_data = this.passedData;
    console.log('one use responses-->',this.received_data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
