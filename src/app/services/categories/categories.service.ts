import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public current_lang = localStorage.getItem('lang');

  constructor(
    private http:HttpClient 
  ) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(environment.appURL + this.current_lang + '/' + 'categories');
  }

  getCategoriesWithInserts(): Observable<Category[]>{
    return this.http.get<Category[]>(environment.appURL + this.current_lang + '/' + 'categories-with-ads');
  }
}
