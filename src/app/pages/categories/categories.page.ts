import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from 'src/app/interfaces/category';
import { Page } from 'src/app/interfaces/page';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { PageService } from 'src/app/services/page/page.service';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public trans : any;
  public lang : any;

  categories$:Observable<Category[]>;
  pages$:Observable<Page[]>;

  constructor(
    private navControl:NavController,
    private menu: MenuController,
    private categoryService:CategoriesService,
    private loadingCtrl: LoadingController,
    private pageService:PageService,
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
      message: this.trans.Loading,
    });

    laoding.present();

    this.categories$ = this.categoryService.getCategories().pipe(
      tap((categories) => {
        laoding.dismiss();
        return categories;
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
  
  goToInserts(category_uuid, category_name){
    localStorage.setItem('category_uuid', category_uuid);
    localStorage.setItem('category_name', category_name);
    this.navControl.navigateForward('/category-inserts');
  }

  openFirst() {
    this.menu.enable(true, 'categoryMenu');
    this.menu.open('categoryMenu');
  }

}
