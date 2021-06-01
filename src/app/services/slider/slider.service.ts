import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/interfaces/slider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public current_lang = localStorage.getItem('lang');

  constructor(
    private httClient: HttpClient
  ) { }

  // Get Slider
  getAll() : Observable<Slider[]>{
    return this.httClient.get<Slider[]>(environment.appURL + this.current_lang + '/' + 'sliders');
  }

}
