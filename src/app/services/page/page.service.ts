import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/interfaces/page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  public current_lang = localStorage.getItem('lang');

  constructor(
    private httpClient : HttpClient
  ) { }

  
  getAll() : Observable<Page[]>{
    return this.httpClient.get<Page[]>(environment.appURL + this.current_lang + '/' + 'pages/all');
  }

  getTermsPage(){
    return this.httpClient.get(environment.appURL + this.current_lang + '/' + 'pages/terms');
  }

  getPrivacyPage(){
    return this.httpClient.get(environment.appURL + this.current_lang + '/' + 'pages/privacy');
  }
}
