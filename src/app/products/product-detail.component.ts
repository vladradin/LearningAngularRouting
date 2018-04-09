import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    GetProductCallback: () => (id: number) => void;
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.GetProductCallback = () => this.getProduct;
        let id = + this.route.params.subscribe(params => this.ParametersChanged(params));
    }

    ParametersChanged(params: Params): void {
        let id = params['id'];
        var firstName = params['first'];
        var lastName = params['last'];
        var age = params['age'];

        console.log(firstName);
        console.log(lastName);
        console.log(age);
        
        this.getProduct(id);
    }



    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
}
