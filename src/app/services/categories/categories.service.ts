import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http:HttpClient 
  ) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(environment.appURL + 'categories');
  }
}
