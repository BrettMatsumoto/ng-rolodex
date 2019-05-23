import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  createUser(newUserData): Promise<object> {
    return this.http.post('/api/register', newUserData).toPromise();
  }

  searchContacts(name): Promise<object> {
    return this.http.get(`/api/contacts/search/:id`, name).toPromise();
  }

  register(data) {
    return this.http.post('/api/register', data).toPromise();
  }

  login(data) {
    return this.http.post('/api/login', data).toPromise();
  }

  logout() {
    return this.http.get('./api/logout').toPromise();
  }
}
