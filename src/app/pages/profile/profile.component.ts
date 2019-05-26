import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

interface UserResponse {
  username: string;
  password: string;
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: {
    username: string;
    password: string;
    name: string;
    email: string;
    address: string;
  };

  formData: {
    username: string;
    password: string;
    name: string;
    email: string;
    address: string;
  };
  constructor(private session: SessionService, private router: Router, private backend: BackendService) {}

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  ngOnInit() {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
    }

    this.backend.getUser().then((data: UserResponse) => {
      this.user = data;
    });
  }

  submit() {
    console.log(this.formData);
  }
}
