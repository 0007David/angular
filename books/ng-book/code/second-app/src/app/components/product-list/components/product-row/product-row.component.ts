import { Component, HostBinding, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";


@Component({
    selector: 'app-product-row',
    template:`
    <h2>Product Row work!</h2>
    <app-product-image [product]="product"></app-product-image>
    <div class="content">
        <div class="header">{{ product.name }}</div>
        <div class="meta">
            <div class="product-sku">SKU # {{ product.sku }}</div>
        </div>
        <div class="description">
            <app-product-department [product]="product"></app-product-department>
        </div>
    </div>
    <app-product-display [price]="product.price"></app-product-display>

    `
})
export class ProductRowComponent {

    @Input() product!: Product;

    @HostBinding('attr.class') cssClass = 'item';

    constructor() {

    }

}
