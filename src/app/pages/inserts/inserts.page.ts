import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdComponent } from 'src/app/components/ad/ad.component';
import { Insert } from 'src/app/interfaces/insert';
import { Page } from 'src/app/interfaces/page';
import { AdsService } from 'src/app/services/ads/ads.service';
import { PageService } from 'src/app/services/page/page.service';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-inserts',
  templateUrl: './inserts.page.html',
  styleUrls: ['./inserts.page.scss'],
})
export class InsertsPage implements OnInit {

  public trans : any;
  public lang : any;

  inserts$:Observable<Insert[]>;
  pages$:Observable<Page[]>;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private insertService:AdsService,
    private loadingCtrl: LoadingController,
    private pageService:PageService,
    private modalCtrl: ModalController
    ) {
      if(localStorage.getItem('lang') == 'en'){
        this.trans = en;
        this.lang = true;
      }else{
        this.trans = ar;
        this.lang = false;
      }
    }

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

      this.pages$ = this.pageService.getAll().pipe(
        tap((pages) => {
          laoding.dismiss();
          console.log(pages);
          return pages;
        })
      );
    }

    changeLang() {
      if(localStorage.getItem('lang') == 'ar'){
        localStorage.setItem('lang', 'en');
        window.location.reload();
        this.lang = true;
      }else{
        localStorage.setItem('lang', 'ar');
        window.location.reload();
        this.lang = false;
      }
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
