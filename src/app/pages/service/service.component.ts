import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  dataSource

  displayedColumns: string[] = [
    'id',
    'intitule',
    'effectif',
    'som_sal',
    'nb_sal_def'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(key) {

  }

  addService() {}

}
