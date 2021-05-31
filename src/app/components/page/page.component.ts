import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  page : any;

  constructor(
    private modalCtrl:ModalController,
    params: NavParams
  ) { 

    this.page = params.get('page');

  }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
