import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertsDetailsPageRoutingModule } from './inserts-details-routing.module';

import { InsertsDetailsPage } from './inserts-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertsDetailsPageRoutingModule
  ],
  declarations: [InsertsDetailsPage]
})
export class InsertsDetailsPageModule {}
