import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employe-delete-dialog',
  templateUrl: './employe-delete-dialog.component.html',
  styleUrls: ['./employe-delete-dialog.component.scss']
})
export class EmployeDeleteDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EmployeDeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
