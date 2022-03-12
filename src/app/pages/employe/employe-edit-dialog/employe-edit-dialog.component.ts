import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-employe-edit-dialog',
  templateUrl: './employe-edit-dialog.component.html',
  styleUrls: ['./employe-edit-dialog.component.scss'],
})
export class EmployeEditDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    salaire: new FormControl(''),
    service: new FormControl(''),
    role: new FormControl('employe'),
  });
  services: string[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EmployeEditDialogComponent>,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.getServices();
    this.form.patchValue({
      name: this.data.name,
      salaire: this.data.salaire,
      service: this.data.service,
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  getServices() {
    this.service.getAll().subscribe((data) => {
      this.services = data.map((item) => item.intitule);
    });
  }
}
