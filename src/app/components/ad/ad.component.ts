import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {

  insert : any;

  constructor(
    private modalCtrl:ModalController,
    params: NavParams
  ) { 

    this.insert = params.get('insert');

  }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
