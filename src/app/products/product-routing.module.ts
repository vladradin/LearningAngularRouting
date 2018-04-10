import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductResolver } from './product-resolve.service';

const productRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent, resolve: { product: ProductResolver } },
    { path: 'products/:id/edit', component: ProductEditComponent, resolve: { product: ProductResolver } }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule { }