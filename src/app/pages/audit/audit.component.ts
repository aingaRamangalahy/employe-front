import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  dataSource

  displayedColumns: string[] = [
    'quand',
    'qui',
    'quoi',
    'ancien_salaire',
    'nouv_salaire',
    'employe'
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
