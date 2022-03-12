import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../schema/employe.schema';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class  EmployeService{

  constructor(private mainService: MainService) {}

  getAll(): Observable<any> {
    return this.mainService._GET('/api/users');
  }

  getAllAudit(): Observable<any> {
    return this.mainService._GET('/api/users/audit');
  }

  getOneById(id: string): Observable<any> {
    return this.mainService._GET(`/api/users/${id}`);
  }

  create(user: User): Observable<any> {
    return this.mainService._POST(`/api/users/`, user, {
      reportProgress: true,
      observe: 'events',
    });
  }

  update(id: string, body: User): Observable<any> {
    return this.mainService._PUT('/api/users', id, body, {
      reportProgress: true,
      observe: 'events',
    });
  }

  delete(id: string): Observable<any> {
    return this.mainService._DELETE('/api/users', id);
  }
}
