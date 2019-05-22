import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: {
    username: string;
    name: string;
    email: string;
    address: string;
  }[] = [];

  constructor() {}

  ngOnInit() {

  }
}
