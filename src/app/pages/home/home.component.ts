import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT:{[id:number]:number} = {1:400, 3:335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[
    
  ]
})
export class HomeComponent implements OnInit {

  cols= 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string| undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colNum: number): void {
    this.cols= colNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category= newCategory;
  }

  onAddToCarrinho(product: Product): void {
    this.cartService.addToCart({
      product: product.img,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }


}

