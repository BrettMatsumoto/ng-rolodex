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

  searchContacts(name: string): Promise<object> {
    return this.http.get(`/api/contacts/search/${name}`).toPromise();
  }
}
