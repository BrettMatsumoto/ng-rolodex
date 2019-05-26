import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { Session } from 'inspector';

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
  constructor(private auth: AuthService, private router: Router, private session: SessionService) {
    this.user = this.session.getSession();
  }
}
