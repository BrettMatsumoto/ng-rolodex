import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getContacts(): Promise<object> {
    return this.http.get('/api/contacts').toPromise();
  }

  getProfile(): Promise<object> {
    return this.http.get('/api/profile').toPromise();
  }

  createContact(newContactData): Promise<object> {
    console.log('hits backend services')
    return this.http.post('./api/contacts', newContactData).toPromise();
  }

  createUser(newUserData): Promise<object> {
    return this.http.post('/api/register', newUserData).toPromise();
  }

  searchContacts(name): Promise<object> {
    console.log(name);
    return this.http.get(`/api/contacts/search/:id`, name).toPromise();
  }

  register(data) {
    // console.log('hits backend register')
    return this.http.post('./api/register', data).toPromise();
  }

  login(data) {
    // console.log('backend.serv', data);
    return this.http.post('/api/login', data).toPromise();
  }

  logout() {
    return this.http.get('./api/logout').toPromise();
  }

  deleteContact(data) {
    console.log('hits backend service', data.id);
    return this.http.delete(`./api/contacts/${data.id}`).toPromise();
  }

  editContact(data) {
    // console.log(data);
    return this.http.put(`./api/contacts/${data.id}`, data).toPromise();
  }

  // getUser() {
  //   console.log('test');
  //   return this.http.get('./api/user/').toPromise();
  // }
}
