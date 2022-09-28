import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;

  product: Product| undefined = {
    id: 1,
    title: "Sapato Nike",
    price: 250,
    category: "sapato",
    description: "Sapato masculino Nike",
    img: 'https://imgnike-a.akamaihd.net/1300x1300/022104ID.jpg',
  };

  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCarrinho(): void {
    this.addToCart.emit(this.product);
  }


}

