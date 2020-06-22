import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)},
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then( m => m.BlogModule)},
  { path: 'backoffice', loadChildren: () => import('./modules/backoffice/backoffice.module').then( m => m.BackofficeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
