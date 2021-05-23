import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inserts',
  templateUrl: './inserts.page.html',
  styleUrls: ['./inserts.page.scss'],
})
export class InsertsPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'insertMenu');
    this.menu.open('insertMenu');
  }

  goToDetails(){
    this.navCtrl.navigateForward('/inserts-details');
  }
}
