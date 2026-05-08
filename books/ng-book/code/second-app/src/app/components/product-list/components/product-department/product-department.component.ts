import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";



@Component({
    selector: 'app-product-department',
    template: `
    <div class="product-department">
        <span *ngFor="let name of product.department; let i = index">
            <a href="#">{{name}}</a>
            <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
        </span>
    </div>
    `
})
export class ProductDepartmentComponent {

    @Input() product!: Product;

    constructor() { }
}
