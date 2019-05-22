import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

interface ContactsResponse {
  name: string,
  address: string,
  mobile: string,
  work: string,
  home: string,
  email: string,
  twitter: string,
  instagram: string,
  github: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contacts: {
    name: string,
    address: string,
    mobile: string,
    work: string,
    home: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string,
  }[] = [];

  // findUser: {
  //   name: string;
  // } = {
  //   name: '',
  // };

  // foundUsers: {
  //   name: string;
  // }[] = [];

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.getContacts().then((data: ContactsResponse[]) => {
      this.contacts = data;
      console.log(data);
    })
  }

  // submit() {
  //   console.log(this.findUser);
  //   const { name } = this.findUser;

  //   this.backend.searchContacts(name).then((data: { name: string }[]) => {
  //     this.foundUsers = data
  //   });
  // }
}
