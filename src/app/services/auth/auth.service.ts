import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  login(user : User): Observable<User>{
    return this.http.post<User>(environment.appURL + 'login', user);
  }

  register(user : User): Observable<User>{
    return this.http.post<User>(environment.appURL + 'register', user);
  }

  updateUser(user : User, user_uuid : any): Observable<User>{
    return this.http.post<User>(environment.appURL + 'update_user/' + user_uuid, user);
  }
}
