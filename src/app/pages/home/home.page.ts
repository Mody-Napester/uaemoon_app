import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdComponent } from 'src/app/components/ad/ad.component';
import { Category } from 'src/app/interfaces/category';
import { Insert } from 'src/app/interfaces/insert';
import { AdsService } from 'src/app/services/ads/ads.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories$:Observable<Category[]>;
  inserts$:Observable<Insert[]>;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private navControl:NavController,
    private menu: MenuController,
    private categoryService:CategoriesService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private insertService:AdsService,
    private modalCtrl: ModalController
    ) { }

    async ngOnInit() {
      const laoding = await this.loadingCtrl.create({
        message:'Loading ...',
      });
  
      laoding.present();
  
      this.categories$ = this.categoryService.getCategories().pipe(
        tap((categories) => {
          laoding.dismiss();
          console.log(categories);
          return categories;
        })
      );

      this.inserts$ = this.insertService.getAll().pipe(
        tap((inserts) => {
          laoding.dismiss();
          console.log(inserts);
          return inserts;
        })
      );
    }

  openMenu() {
    this.menu.enable(true, 'homeMenu');
    this.menu.open('homeMenu');
  }

  openFirst() {
    this.menu.enable(true, 'insertMenu');
    this.menu.open('insertMenu');
  }

  goToInserts(){
    this.navControl.navigateForward('tabs/pages/inserts');
  }

  async openDetailsModal(insert : Insert){
    const modal = await this.modalCtrl.create({
      component: AdComponent,
      componentProps: {insert}
    });

    modal.present();
  }


}
