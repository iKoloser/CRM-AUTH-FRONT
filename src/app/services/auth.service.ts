import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private apiUrl = 'http://localhost:3000';


  http = inject(HttpClient);
  router = inject(Router);
  jwtHelper = inject(JwtHelperService);


  login(data: user): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data); 
  }


  register(email: string, password: string) {
    console.log(email, password);
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }





}
