import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: 'app-product-list',
  template: `
  <h2>Product List Works!</h2>
    <app-product-row
        *ngFor="let product of productList"
        [product]="product"
        (click)="clicked(product)"
        [class.selected]="isSelected(product)">
    </app-product-row>
  `
})
export class ProductListComponent {

    @Input() productList: Product[];

    @Output() onProductSelected: EventEmitter<Product>;

    private currentProduct!: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
    this.productList = [];
  }

    clicked(product: any): void {
        console.log('clicked ', product);
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}
