import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['/footer.component.scss'],
})
export class FooterComponent {
  user: {
    loggedIn: boolean;
    username: string;
  };
  constructor(private router: Router, private session: SessionService) {
    this.user = this.session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }
}
