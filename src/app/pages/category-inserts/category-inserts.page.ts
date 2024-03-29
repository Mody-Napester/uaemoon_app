import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdComponent } from 'src/app/components/ad/ad.component';
import { Insert } from 'src/app/interfaces/insert';
import { AdsService } from 'src/app/services/ads/ads.service';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-category-inserts',
  templateUrl: './category-inserts.page.html',
  styleUrls: ['./category-inserts.page.scss'],
})
export class CategoryInsertsPage implements OnInit {

  public trans : any;

  category_name : string;
  inserts$:Observable<Insert[]>;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private insertService:AdsService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) { 
      if(localStorage.getItem('lang') == 'en'){
        this.trans = en;
      }else{
        this.trans = ar;
      }
    }

    async ngOnInit() {
      const laoding = await this.loadingCtrl.create({
        message: this.trans.Loading,
      });
  
      laoding.present();

      let category_uuid = localStorage.getItem('category_uuid');
      this.category_name = localStorage.getItem('category_name');

      console.log(category_uuid);
      
      this.inserts$ = this.insertService.getGetegoryAds(category_uuid).pipe(
        tap((inserts) => {
          laoding.dismiss();
          console.log(inserts);
          return inserts;
        })
      );
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
