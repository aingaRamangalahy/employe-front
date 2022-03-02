import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../schema/service.schema';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class  ServiceService{

  constructor(private mainService: MainService) {}

  getAll(): Observable<any> {
    return this.mainService._GET('/api/service');
  }

  getOneById(id: string): Observable<any> {
    return this.mainService._GET(`/api/service/${id}`);
  }

  create(service: Service): Observable<any> {
    return this.mainService._POST(`/api/service/`, service, {
      reportProgress: true,
      observe: 'events',
    });
  }

  update(id: string, body: Service): Observable<any> {
    return this.mainService._PUT('/api/service', id, body, {
      reportProgress: true,
      observe: 'events',
    });
  }

  delete(id: string): Observable<any> {
    return this.mainService._DELETE('/api/service', id);
  }
}
