import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-employe-add-dialog',
  templateUrl: './employe-add-dialog.component.html',
  styleUrls: ['./employe-add-dialog.component.scss'],
})
export class EmployeAddDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    salaire: new FormControl(''),
    service: new FormControl(''),
    role: new FormControl('employe'),
  });
  services: string[] = [];
  constructor(
    private service: ServiceService,
    private dialogRef: MatDialogRef<EmployeAddDialogComponent>
  ) {}

  ngOnInit(): void {
    this.getServices();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submit() {}

  getServices() {
    this.service.getAll().subscribe((data) => {
      this.services = data.map((item) => item.intitule);
    });
  }
}
