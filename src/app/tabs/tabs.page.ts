import { Component, OnInit } from '@angular/core';
import  { trans as ar }  from  '../../assets/translation/ar.json';
import  { trans as en }  from  '../../assets/translation/en.json';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

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
