import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertsPageRoutingModule } from './inserts-routing.module';

import { InsertsPage } from './inserts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertsPageRoutingModule
  ],
  declarations: [InsertsPage]
})
export class InsertsPageModule {}
