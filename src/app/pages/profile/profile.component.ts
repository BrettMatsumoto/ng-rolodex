import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
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
export class ProfileComponent implements OnInit {
  user: {
    loggedIn: boolean,
    username: string,
  }

  profile: {
    username: string;
    password: string;
    name: string;
    email: string;
    address: string;
  } = {
    username: '',
    password: '',
    name: '',
    email: '',
    address: '',
  };

  constructor(private backend: BackendService, private session: SessionService, private router: Router) {
    this.user = this.session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  ngOnInit() {
    if (!(this.isLoggedIn())){
      this.router.navigate(['/login'])
    }

    // console.log('hits ngOnInit')
    this.backend.getUser().then((data: UserResponse) => {
      this.profile = data
    })
  }
}