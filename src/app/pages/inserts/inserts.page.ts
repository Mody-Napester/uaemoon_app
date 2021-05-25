import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdComponent } from 'src/app/components/ad/ad.component';
import { Insert } from 'src/app/interfaces/insert';
import { AdsService } from 'src/app/services/ads/ads.service';

@Component({
  selector: 'app-inserts',
  templateUrl: './inserts.page.html',
  styleUrls: ['./inserts.page.scss'],
})
export class InsertsPage implements OnInit {

  inserts$:Observable<Insert[]>;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private insertService:AdsService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) { }

    async ngOnInit() {
      const laoding = await this.loadingCtrl.create({
        message:'Loading ...',
      });
  
      laoding.present();
  
      this.inserts$ = this.insertService.getAll().pipe(
        tap((inserts) => {
          laoding.dismiss();
          console.log(inserts);
          return inserts;
        })
      );
    }

  openFirst() {
    this.menu.enable(true, 'insertMenu');
    this.menu.open('insertMenu');
  }

  goToDetails(insert_uuid){
    console.log(insert_uuid);
    this.navCtrl.navigateForward('/inserts-details/' + insert_uuid);
  }

  async openDetailsModal(insert : Insert){
    const modal = await this.modalCtrl.create({
      component: AdComponent,
      componentProps: {insert}
    });

    modal.present();
  }
}
