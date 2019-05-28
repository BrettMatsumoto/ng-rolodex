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
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
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

  formData: {
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

  editFormData: {
    id: string,
    name: string,
    address: string,
    mobile: string,
    work: string,
    home: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string,
  } = {
    id: '',
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    twitter: '',
    instagram: '',
    github: '',
  }

  user: {
    loggedIn: boolean;
    username: string;
  };

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

  submit() {
    // console.log('hits submit button');
    this.backend.createContact(this.formData).then(() => {
      this.ngOnInit();
    });
  }

  delete() {
    // console.log(this.editFormData)
    this.backend.deleteContact(this.editFormData).then(() => {
      this.ngOnInit();
    })
  }

  edit() {
    // console.log(this.editFormData)
    this.backend.editContact(this.editFormData).then(()=> {
      this.ngOnInit();
    })
  }

  giveAlert() {
    alert('New Contact Created!')
  }
}
