import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {

  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
