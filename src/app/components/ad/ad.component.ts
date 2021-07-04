import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {

  insert : any;

  trustedVideoUrl: SafeResourceUrl;

  constructor(
    private modalCtrl:ModalController,
    private domSanitizer: DomSanitizer,
    params: NavParams
  ) { 

    this.insert = params.get('insert');

    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.insert.url);

  }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
