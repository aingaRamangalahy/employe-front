import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-add-dialog',
  templateUrl: './service-add-dialog.component.html',
  styleUrls: ['./service-add-dialog.component.scss']
})
export class ServiceAddDialogComponent implements OnInit {
  newService: string;

  constructor(public dialogRef: MatDialogRef<ServiceAddDialogComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
