import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-inserts-details',
  templateUrl: './inserts-details.page.html',
  styleUrls: ['./inserts-details.page.scss'],
})
export class InsertsDetailsPage implements OnInit {

  public id:any;

  constructor(
    public navParams: NavParams,
  ) { 
    this.id = this.navParams;
  }

  ngOnInit() {
    console.log(this.id);
  }

}
