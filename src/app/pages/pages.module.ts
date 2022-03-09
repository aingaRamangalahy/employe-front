import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmployeComponent } from './employe/employe.component';
import { ServiceComponent } from './service/service.component';
import { AuditComponent } from './audit/audit.component';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from '../layout/layout.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
// import { UserAddModalComponent } from './user-add-modal/user-add-modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
// import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ServiceAddDialogComponent } from './service/service-add-dialog/service-add-dialog.component';
import { ServiceUpdateDialogComponent } from './service/service-update-dialog/service-update-dialog.component';
import { ServiceDeleteDialogComponent } from './service/service-delete-dialog/service-delete-dialog.component';
import { EmployeAddDialogComponent } from './employe/employe-add-dialog/employe-add-dialog.component';
import { EmployeEditDialogComponent } from './employe/employe-edit-dialog/employe-edit-dialog.component';
import { EmployeDeleteDialogComponent } from './employe/employe-delete-dialog/employe-delete-dialog.component';

@NgModule({
  declarations: [
    EmployeComponent,
    ServiceComponent,
    AuditComponent,
    LoginComponent,
    ServiceAddDialogComponent,
    ServiceUpdateDialogComponent,
    ServiceDeleteDialogComponent,
    EmployeAddDialogComponent,
    EmployeEditDialogComponent,
    EmployeDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatCardModule,
  ],
})
export class PagesModule {}
