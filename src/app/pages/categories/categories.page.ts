import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories$:Observable<Category[]>;

  constructor(
    private navControl:NavController,
    private menu: MenuController,
    private categoryService:CategoriesService,
    private loadingCtrl: LoadingController
  ) { 
    
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
  }

  goToInserts(){
    this.navControl.navigateForward('tabs/pages/inserts');
  }

  openFirst() {
    this.menu.enable(true, 'categoryMenu');
    this.menu.open('categoryMenu');
  }

}
