import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

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
    constructor() {}

    submit(){
        console.log(this.formData)
    }
}