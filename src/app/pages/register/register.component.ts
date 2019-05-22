import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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