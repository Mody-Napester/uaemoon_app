import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryInsertsPageRoutingModule } from './category-inserts-routing.module';

import { CategoryInsertsPage } from './category-inserts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryInsertsPageRoutingModule
  ],
  declarations: [CategoryInsertsPage]
})
export class CategoryInsertsPageModule {}
