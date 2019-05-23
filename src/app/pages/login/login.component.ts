import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData: {
    username: string;
    email: string;
  } = {
    username: '',
    email: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth
      .login(this.formData)
      .then(() => {
        console.log('user logged in');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

  submit() {
    console.log(this.formData);
  }
}
