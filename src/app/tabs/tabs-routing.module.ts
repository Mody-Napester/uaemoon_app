import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children:[
      {
        path: 'categories',
        loadChildren: () => import('../pages/categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'inserts',
        loadChildren: () => import('../pages/inserts/inserts.module').then( m => m.InsertsPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'pages/home',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
