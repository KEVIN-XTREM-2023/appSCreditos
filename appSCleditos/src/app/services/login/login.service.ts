
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
  })
  export class LoginService {
    constructor(private http: HttpClient) { }
    login(email: any, password: any) {

        var data = {
          'email_adm': email,
          'cont_adm': password
        };
    
        return this.http.post(`http://localhost:8080/appSCreditos/Admin/login.php`, data);
    
      }
  }