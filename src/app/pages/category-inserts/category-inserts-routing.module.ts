import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryInsertsPage } from './category-inserts.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryInsertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryInsertsPageRoutingModule {}
