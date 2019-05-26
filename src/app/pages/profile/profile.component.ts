import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    formData: {
        username: string,
        name: string,
        email: string,
        address: string,
    }
    constructor(private session: SessionService, private router: Router) {}

    isLoggedIn() {
        return this.session.isLoggedIn();
    }

    ngOnInit() {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login'])
        }
    }

    submit(){
        console.log(this.formData)
    }
}