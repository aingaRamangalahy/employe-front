import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-delete-dialog',
  templateUrl: './service-delete-dialog.component.html',
  styleUrls: ['./service-delete-dialog.component.scss']
})
export class ServiceDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ServiceDeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
