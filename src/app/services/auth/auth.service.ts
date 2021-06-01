import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insert } from 'src/app/interfaces/insert';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public current_lang = localStorage.getItem('lang');

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

  userAds(user_uuid : any): Observable<Insert[]>{
    return this.http.get<Insert[]>(environment.appURL + this.current_lang + '/' + 'user/' + user_uuid + '/ads');
  }

  insertAd(insert : Insert, user_uuid : any): Observable<Insert>{
    return this.http.post<Insert>(environment.appURL + 'user/' + user_uuid + '/add-new-ads', insert);
  }
}
