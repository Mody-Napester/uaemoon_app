import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import  { trans as ar }  from  '../../assets/translation/ar.json';
import  { trans as en }  from  '../../assets/translation/en.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public trans : any;
  
  constructor(
    private navCtrl:NavController,
  ) {

    if(!localStorage.getItem('lang')){
      localStorage.setItem('lang', 'ar');
    }
    
    if(localStorage.getItem('lang') == 'en'){
      this.trans = en;
    }else{
      this.trans = ar;
    }
    
  }

  ngOnInit() {}
  
  goToHome(){
    let email = localStorage.getItem('email');
    if(email){
      this.navCtrl.navigateRoot('/tabs');
    }else{
      this.navCtrl.navigateForward('/login');
    }
  }

  goToAccount(){
    let email = localStorage.getItem('email');
    if(email){
      this.navCtrl.navigateRoot('/tabs');
    }else{
      this.navCtrl.navigateForward('/login');
    }
  }

}
