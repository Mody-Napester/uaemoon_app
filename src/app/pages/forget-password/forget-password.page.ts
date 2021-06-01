import { Component, OnInit } from '@angular/core';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  public trans : any;

  constructor() {
    if(localStorage.getItem('lang') == 'en'){
      this.trans = en;
    }else{
      this.trans = ar;
    }
  }

  ngOnInit() {
  }

}
