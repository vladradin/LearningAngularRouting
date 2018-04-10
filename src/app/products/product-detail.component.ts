import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {        
        let id = + this.route.data.subscribe(params => this.ParametersChanged(params));
    }

    ParametersChanged(params: Params): void {
        this.product = params['product'];
    }



    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
}
