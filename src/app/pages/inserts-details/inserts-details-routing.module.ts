import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertsDetailsPage } from './inserts-details.page';

const routes: Routes = [
  {
    path: '',
    component: InsertsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertsDetailsPageRoutingModule {}
