import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Service } from 'src/app/core/schema/service.schema';
import { ServiceService } from 'src/app/core/services/service.service';
import { ServiceAddDialogComponent } from './service-add-dialog/service-add-dialog.component';

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
            this.ngOnInit();
          }
        });
      }
    });
  }

  getServices() {
    this.service.getAll().subscribe((data) => {
      console.log('service data', data);
      this.serviceList = data;
    });
  }
}
