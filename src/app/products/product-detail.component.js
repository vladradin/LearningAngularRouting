"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetProductCallback = function () { return _this.getProduct; };
        var id = +this.route.params.subscribe(function (params) { return _this.ParametersChanged(params); });
    };
    ProductDetailComponent.prototype.ParametersChanged = function (params) {
        var id = params['id'];
        var firstName = params['first'];
        var lastName = params['last'];
        var age = params['age'];
        console.log(firstName);
        console.log(lastName);
        console.log(age);
        this.getProduct(id);
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: './app/products/product-detail.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map