import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/core/services/employe.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  audits :any[] = []

  displayedColumns: string[] = [
    'quand',
    'qui',
    'quoi',
    'ancien_salaire',
    'nouv_salaire',
    'employe'
  ];

  actionClass = {
    'CREATE': 'create',
    'DELETE': 'delete',
    'UPDATE': 'update',
  }
  constructor(private employe: EmployeService) { }

  ngOnInit(): void {
    this.employe.getAllAudit().subscribe( data => {
      console.log('audit data', data)
      this.audits = data;
      this.audits = this.audits.reverse();
    })
  }



}
