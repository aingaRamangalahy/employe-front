import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Service } from 'src/app/core/schema/service.schema';
import { ServiceService } from 'src/app/core/services/service.service';
import { ServiceAddDialogComponent } from './service-add-dialog/service-add-dialog.component';
import { ServiceDeleteDialogComponent } from './service-delete-dialog/service-delete-dialog.component';
import { ServiceUpdateDialogComponent } from './service-update-dialog/service-update-dialog.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  serviceList: Service[] = [];

  displayedColumns: string[] = [
    'id',
    'intitule',
    'effectif',
    'som_sal',
    'nb_sal_def',
    'actions'
  ];

  constructor(public dialog: MatDialog, private service: ServiceService) {}

  ngOnInit(): void {
    this.getServices();
  }

  applyFilter(key) {}

  openAddServiceDialog() {
    const dialogRef = this.dialog.open(ServiceAddDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.service.create({ intitule: result }).subscribe((data) => {
          if (data) {
            this.getServices();
          }
        });
      }
    });
  }

  getServices() {
    this.service.getAll().subscribe((data) => {
      console.log('service data', data);
      this.serviceList = data;
      this.serviceList = this.serviceList.reverse();
    });
  }

  editService(element) {
    const dialogRef = this.dialog.open(ServiceUpdateDialogComponent, {
      width: '250px',
      data: { service: element?.intitule}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.service.update(element._id, { intitule: result }).subscribe((data) => {
          if (data) {
            this.getServices();
          }
        });
      }
    });
  }

  deleteService(element) {
    const dialogRef = this.dialog.open(ServiceDeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result == 'ok') {
        this.service.delete(element._id,).subscribe((data) => {
          if (data) {
            this.getServices();
          }
        });
      }
    });
  }
}
