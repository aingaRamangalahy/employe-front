import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuditComponent } from './audit/audit.component';
import { EmployeComponent } from './employe/employe.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'employes', pathMatch: 'full' },
      { path: 'employes', component: EmployeComponent },
      { path: 'services', component: ServiceComponent },
      { path: 'audit', component: AuditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
