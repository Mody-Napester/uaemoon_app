import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

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
