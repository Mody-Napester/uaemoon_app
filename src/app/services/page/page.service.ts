import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/interfaces/page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private httpClient : HttpClient
  ) { }

  
  getAll() : Observable<Page[]>{
    return this.httpClient.get<Page[]>(environment.appURL + 'pages/all');
  }

  getTermsPage(){
    return this.httpClient.get(environment.appURL + 'pages/terms');
  }

  getPrivacyPage(){
    return this.httpClient.get(environment.appURL + 'pages/privacy');
  }
}
