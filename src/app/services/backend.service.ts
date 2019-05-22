import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
    
  newUserData: {
    username: string;
    name: string;
    email: string;
    address: string;
  } = {
    username: '',
    name: '',
    email: '',
    address: '',
  };

  constructor(private http: HttpClient) {}

  getContacts(): Promise<object> {
    return this.http.get('/api/contacts').toPromise();
  }

  createUser(newUserData): Promise<object> {
    return this.http.post('/api/register', newUserData).toPromise();
  }
}
