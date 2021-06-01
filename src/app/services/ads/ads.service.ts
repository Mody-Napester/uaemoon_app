import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insert } from 'src/app/interfaces/insert';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  public current_lang = localStorage.getItem('lang');

  constructor(
    private http:HttpClient
  ) { }

  getAll(): Observable<Insert[]>{
    return this.http.get<Insert[]>(environment.appURL + this.current_lang + '/' + 'ads');
  }

  getGetegoryAds(category_uuid : string): Observable<Insert[]>{
    return this.http.get<Insert[]>(environment.appURL + this.current_lang + '/' + 'categories/ads/' + category_uuid);
  }
}
