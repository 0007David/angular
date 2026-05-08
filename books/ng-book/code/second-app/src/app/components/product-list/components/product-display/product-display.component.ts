import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";


@Component({
    selector: 'app-product-display',
    template: `
    <div class="price-display">\${{price}}</div>

    `
})
export class ProductDisplayComponent {

    @Input() price!: number;

    constructor() { }
}
