import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page/page.service';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  public trans : any;

  public name:any;
  public details:any;
  public picture:any;
  public cover:any;

  constructor(
    private loadinCtrl : LoadingController,
    private pageService : PageService,
  ) {
    if(localStorage.getItem('lang') == 'en'){
      this.trans = en;
    }else{
      this.trans = ar;
    }
  }

  async ngOnInit() {
    const loading = await this.loadinCtrl.create({
      message: this.trans.Loading,
    });

    loading.present();

    this.pageService.getPrivacyPage().subscribe((page) => {
      console.log(page);
      loading.dismiss();
      this.name = page['name'];
      this.details = page['details'];
      this.picture = page['picture'];
      this.cover = page['cover'];
    })
  }

}
