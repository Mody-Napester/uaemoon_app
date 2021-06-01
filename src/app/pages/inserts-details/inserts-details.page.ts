import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-inserts-details',
  templateUrl: './inserts-details.page.html',
  styleUrls: ['./inserts-details.page.scss'],
})
export class InsertsDetailsPage implements OnInit {

  public trans : any;

  public id:any;

  constructor(
    public navParams: NavParams,
  ) { 
    this.id = this.navParams;

    if(localStorage.getItem('lang') == 'en'){
      this.trans = en;
    }else{
      this.trans = ar;
    }
  }

  ngOnInit() {
    console.log(this.id);
  }

}
