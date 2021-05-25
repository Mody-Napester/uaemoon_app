import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl:NavController
  ) {}

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
