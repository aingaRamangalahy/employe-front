import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

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
  constructor(private router: Router, private authService: AuthService) {
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login'])
      }
   }

  ngOnInit(): void {
  }

  applyFilter(key) {

  }

  addUser() {}

}
