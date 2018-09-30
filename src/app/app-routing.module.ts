import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
