import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/core/schema/employe.schema';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeService } from 'src/app/core/services/employe.service';
import { EmployeAddDialogComponent } from './employe-add-dialog/employe-add-dialog.component';
import { EmployeDeleteDialogComponent } from './employe-delete-dialog/employe-delete-dialog.component';
import { EmployeEditDialogComponent } from './employe-edit-dialog/employe-edit-dialog.component';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss'],
})
export class EmployeComponent implements OnInit {
  saving: boolean = false;
  employeList: User[] = [];

  displayedColumns: string[] = ['nom', 'salaire', 'service', 'actions'];
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
    this.employeService.getAll().subscribe((data) => {
      this.employeList = data;
      this.employeList = this.employeList.reverse();
    });
  }

  addUser() {
    const dialogRef = this.dialog.open(EmployeAddDialogComponent, {
      width: '250px',
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

  editUser(user) {
    const { name, salaire, service, _role } = user;
    const dialogRef = this.dialog.open(EmployeEditDialogComponent, {
      width: '250px',
      data: {
        name,
        salaire,
        service,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.employeService.update(user._id, result).subscribe((data) => {
          if (data) {
            this.getEmployes();
          }
        });
      }
    });
  }

  deleteUser(user) {
    const dialogRef = this.dialog.open(EmployeDeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result == 'ok') {
        this.employeService.delete(user._id).subscribe((data) => {
          if (data) {
            this.getEmployes();
          }
        });
      }
    });
  }
}
