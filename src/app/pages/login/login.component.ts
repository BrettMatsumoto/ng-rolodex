import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

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

  constructor() {}

  submit() {
      console.log(this.formData);
  }
}
