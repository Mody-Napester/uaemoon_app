import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdComponent } from 'src/app/components/ad/ad.component';
import { PageComponent } from 'src/app/components/page/page.component';
import { Category } from 'src/app/interfaces/category';
import { Insert } from 'src/app/interfaces/insert';
import { Page } from 'src/app/interfaces/page';
import { Slider } from 'src/app/interfaces/slider';
import { AdsService } from 'src/app/services/ads/ads.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { PageService } from 'src/app/services/page/page.service';
import { SliderService } from 'src/app/services/slider/slider.service';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public trans : any;
  public lang : any;

  categories$:Observable<Category[]>;
  inserts$:Observable<Insert[]>;
  sliders$:Observable<Slider[]>;
  pages$:Observable<Page[]>;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private navControl:NavController,
    private menu: MenuController,
    private categoryService:CategoriesService,
    private sliderService:SliderService,
    private pageService:PageService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private insertService:AdsService,
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
  
      this.categories$ = this.categoryService.getCategories().pipe(
        tap((categories) => {
          laoding.dismiss();
          console.log(categories);
          return categories;
        })
      );

      this.sliders$ = this.sliderService.getAll().pipe(
        tap((sliders) => {
          laoding.dismiss();
          console.log(sliders);
          return sliders;
        })
      );

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

  openMenu() {
    this.menu.enable(true, 'homeMenu');
    this.menu.open('homeMenu');
  }

  openFirst() {
    this.menu.enable(true, 'insertMenu');
    this.menu.open('insertMenu');
  }

  goToInserts(category_uuid, category_name){
    localStorage.setItem('category_uuid', category_uuid);
    localStorage.setItem('category_name', category_name);
    this.navControl.navigateForward('/category-inserts');
  }

  async openPageModal(page : Page){
    const modal = await this.modalCtrl.create({
      component: PageComponent,
      componentProps: {page}
    });

    modal.present();
  }

  async openDetailsModal(insert : Insert){
    const modal = await this.modalCtrl.create({
      component: AdComponent,
      componentProps: {insert}
    });

    modal.present();
  }


}
