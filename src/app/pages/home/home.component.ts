import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

interface ContactsResponse {
  name: string;
  address: string;
  mobile: string;
  work: string;
  home: string;
  email: string;
  twitter: string;
  instagram: string;
  github: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contacts: {
    name: string;
    address: string;
    mobile: string;
    work: string;
    home: string;
    email: string;
    twitter: string;
    instagram: string;
    github: string;
  }[] = [];

  user: {
    loggedIn: boolean;
    username: string;
  };

  findUser: {
    name: string;
    address: string;
    mobile: string;
    work: string;
    home: string;
    email: string;
    twitter: string;
    instagram: string;
    github: string;
  } = {
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    twitter: '',
    instagram: '',
    github: '',
  };

  foundUsers: {
    name: string;
    address: string;
    mobile: string;
    work: string;
    home: string;
    email: string;
    twitter: string;
    instagram: string;
    github: string;
  }[] = [];

  constructor(private backend: BackendService, private session: SessionService, private router: Router) {
    this.user = this.session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  ngOnInit() {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
    }

    this.backend.getContacts().then((data: ContactsResponse[]) => {
      this.contacts = data;
    });
  }

  resetSearch() {
    // console.log('reset')
    this.foundUsers = [];
  }

  submit() {
    const { name } = this.findUser;
    // console.log(name);

    this.backend
      .searchContacts(name)
      .then(
        (
          data: {
            name: string;
            address: string;
            mobile: string;
            work: string;
            home: string;
            email: string;
            twitter: string;
            instagram: string;
            github: string;
          }[],
        ) => {
          let newArr = data.filter((obj) => {
            return obj.name.startsWith(name);
          });
          if (!(name === '')) {
            this.foundUsers = newArr;
          } else {
            return;
          }
        },
      )
      .then(() => {
        this.ngOnInit();
      });
  }
}
