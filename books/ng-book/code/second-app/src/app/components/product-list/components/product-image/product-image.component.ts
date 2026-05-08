import { Component, Host, HostBinding, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";


@Component({
    selector: 'app-product-image',
    template: `
    <img class="product-image" [src]="product.imageUrl" alt="Imagen Producto">
    `
})
export class ProductImageComponent {

    @Input() product!: Product;
    @HostBinding('attr.class') cssClass = 'ui small image';

    constructor() { }
}
