import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UsersComponent } from './shared/component/users/users.component';
import { SingleUserComponent } from './shared/component/single-user/single-user.component';
import { EditUserComponent } from './shared/component/edit-user/edit-user.component';
import { SingleProductComponent } from './shared/component/single-product/single-product.component';
import { EditProductComponent } from './shared/component/edit-product/edit-product.component';
import { PagenotFoundComponent } from './shared/component/pagenot-found/pagenot-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ":pid",
        component: SingleProductComponent
      }, {
        path: ":pid/editpro",
        component: EditProductComponent
      },
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':userid',
        component: SingleUserComponent
      },
      {
        path: ':userid/edit',
        component: EditUserComponent
      },
    ]

  },

  {
    path: "pagenotfound",
    component: PagenotFoundComponent
  }, {
    redirectTo: '**',
    component: PagenotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
