import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/employes']);
    }
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      console.log('values', this.form.value);
      this.auth.login(this.form.value).subscribe((data) => {
        console.log('res ok data', data);
        this.auth.storeTokens(data.accessToken);
        this.auth.storeUser(data._id, data.name);
        this.router.navigate(['/employes'])
      });
    }
  }
}
