import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UsersComponent } from './shared/component/users/users.component';
import { SingleUserComponent } from './shared/component/single-user/single-user.component';
import { EditUserComponent } from './shared/component/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleProductComponent } from './shared/component/single-product/single-product.component';
import { EditProductComponent } from './shared/component/edit-product/edit-product.component';
import { PagenotFoundComponent } from './shared/component/pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    SingleUserComponent,
    EditUserComponent,
    SingleProductComponent,
    EditProductComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
