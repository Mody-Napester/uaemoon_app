import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  constructor(
    private navControl:NavController,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  goToInserts(){
    this.navControl.navigateForward('tabs/pages/inserts');
  }

  openFirst() {
    this.menu.enable(true, 'categoryMenu');
    this.menu.open('categoryMenu');
  }

}
