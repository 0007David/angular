import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BreadCrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRowComponent } from './components/product-list/components/product-row/product-row.component';
import { ProductImageComponent } from './components/product-list/components/product-image/product-image.component';
import { ProductDisplayComponent } from './components/product-list/components/product-display/product-display.component';
import { ProductDepartmentComponent } from './components/product-list/components/product-department/product-department.component';
import { BuildInDirectiveComponent } from './build-in-directives/build-in-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BreadCrumbsComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductDisplayComponent,
    BuildInDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
