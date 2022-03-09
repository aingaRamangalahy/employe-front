import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/core/schema/employe.schema';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeService } from 'src/app/core/services/employe.service';
import { EmployeAddDialogComponent } from './employe-add-dialog/employe-add-dialog.component';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss'],
})
export class EmployeComponent implements OnInit {
  saving: boolean = false;
  employeList: User[] = [];

  displayedColumns: string[] = ['id', 'nom', 'salaire', 'service', 'actions'];
  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog,
    private employeService: EmployeService
  ) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.getEmployes();
  }

  applyFilter(key) {}

  getEmployes() {
    this.employeService.getAll().subscribe(data => {
      this.employeList = data;
      this.employeList = this.employeList.reverse();
    })

  }

  addUser() {
    const dialogRef = this.dialog.open(EmployeAddDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.employeService.create(result).subscribe((data) => {
          if (data) {
            this.getEmployes();
          }
        });
      }
    });
  }
}
