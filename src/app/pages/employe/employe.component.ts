import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {
  saving: boolean = false;
  dataSource

  displayedColumns: string[] = [
    'id',
    'nom',
    'salaire',
    'service',
    'actions'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(key) {

  }

  addUser() {}

}
