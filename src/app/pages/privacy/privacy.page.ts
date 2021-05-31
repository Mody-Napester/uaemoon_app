import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page/page.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  public name:any;
  public details:any;
  public picture:any;
  public cover:any;

  constructor(
    private loadinCtrl : LoadingController,
    private pageService : PageService,
  ) {}

  async ngOnInit() {
    const loading = await this.loadinCtrl.create({
      message: "Get Page ...",
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
