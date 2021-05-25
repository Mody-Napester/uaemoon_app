import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insert } from 'src/app/interfaces/insert';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(
    private http:HttpClient
  ) { }

  getAll(): Observable<Insert[]>{
    return this.http.get<Insert[]>(environment.appURL + 'ads');
  }

  // getOne(): Observable<Insert>{
  //   return this.http.get<Insert>(environment.appURL + 'ads');
  // }
}
