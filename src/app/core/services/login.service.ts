import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../schema/employe.schema';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private mainService: MainService) {}

  signin(payload: { name: string; password: string }) {
    return this.mainService._POST(`api/auth/signin`, payload);
  }
}
