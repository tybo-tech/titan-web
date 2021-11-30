import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MegaMenuComponent } from './shared/components/mega-menu/mega-menu.component';
import { ProductsComponent } from './shared/components/mega-menu/products/products.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
];
export const declarations = [
  MegaMenuComponent,
  ProductsComponent,
  HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
