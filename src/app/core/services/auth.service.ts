import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private baseUrl = environment.apiUrl + "/auth";
 
  constructor(private readonly http: HttpClient,private readonly router: Router) {
  }

  login(request: LoginRequest)
    : Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${this.baseUrl}/login`,
      request
    );

  }
   logout(): void {

    localStorage.clear();

    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem(
      'accessToken');
  }

}
