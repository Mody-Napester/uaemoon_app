import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertsPage } from './inserts.page';

const routes: Routes = [
  {
    path: '',
    component: InsertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertsPageRoutingModule {}
