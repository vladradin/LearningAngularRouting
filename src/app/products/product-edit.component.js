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
var message_service_1 = require("../messages/message.service");
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var ProductEditComponent = (function () {
    function ProductEditComponent(productService, messageService, route, router) {
        this.productService = productService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Edit';
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.getProduct(id);
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (product) { return _this.onProductRetrieved(product); }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.onProductRetrieved = function (product) {
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(function () { return _this.onSaveComplete(_this.product.productName + " was deleted"); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (true === true) {
            this.productService.saveProduct(this.product)
                .subscribe(function () { return _this.onSaveComplete(_this.product.productName + " was saved"); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function (message) {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.router.navigate(['/products']);
        // Navigate back to the product list
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    core_1.Component({
        templateUrl: './app/products/product-edit.component.html',
        styleUrls: ['./app/products/product-edit.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        message_service_1.MessageService,
        router_1.ActivatedRoute,
        router_1.Router])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map