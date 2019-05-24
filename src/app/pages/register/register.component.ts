import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formData: {
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

  constructor() {}

  usernameInvalid = true;
  usernameErrorMessage = '';
  passwordInvalid = true;
  passwordErrorMessage = '';
  nameInvalid = true;
  nameErrorMessage = '';
  emailInvalid = true;
  emailErrorMessage = '';
  addressInvalid = true;
  addressErrorMessage = '';

  validateUsername() {
    const { username } = this.formData;
    // console.log(username);

    if (!username) {
      // console.log(username)
      console.log('1');
      this.usernameErrorMessage = 'Username is Required';
      return (this.usernameInvalid = true);
    } else if (username.length < 3) {
      console.log('2')
      this.usernameErrorMessage = 'Username is too short';
      return (this.usernameInvalid = true);
    }
    console.log(username)
    this.usernameErrorMessage = '';
    return (this.usernameInvalid = false);
  }

  validatePassword() {
    const { password } = this.formData;

    if (!password) {
      this.passwordErrorMessage = 'Password is Required';
      return (this.passwordInvalid = true);
    } else if (password.length < 6) {
      this.passwordErrorMessage = 'Password is too short';
      return (this.passwordInvalid = true);
    }
    this.passwordErrorMessage = '';
    return (this.passwordInvalid = false);
  }

  // validateName() {
  //   const { name } = this.formData;

  //   if (!name) {
  //     this.nameErrorMessage = 'Name is Required';
  //     return (this.nameInvalid = true);
  //   }
  //   this.nameErrorMessage = '';
  //   return (this.nameInvalid = false);
  // }

  // validateEmail() {
  //   const { email } = this.formData;

  //   if (!email) {
  //     this.emailErrorMessage = 'Email is Required';
  //     return (this.emailInvalid = true);
  //   } else if (!email.includes('@')) {
  //     this.emailErrorMessage = 'Email is Invalid';
  //     return (this.emailInvalid = true);
  //   }
  //   this.emailErrorMessage = '';
  //   return (this.emailInvalid = false);
  // }

  // validateAddress() {
  //   const { address } = this.formData;

  //   if (!address) {
  //     this.addressErrorMessage = 'Address is Required';
  //     return (this.addressInvalid = true);
  //   }
  //   this.addressErrorMessage = '';
  //   return (this.addressInvalid = false);
  // }

  register() {
    if (this.usernameInvalid || this.passwordInvalid) {
      return;
    }
  }
}
