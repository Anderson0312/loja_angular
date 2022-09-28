import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {

    cart: Cart = {items: [{
      product: "https://t-static.dafiti.com.br/Kso12qAhvfBAtgXz5TRU1LOlFJo=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-t%c3%aanis-adidas-originals-forum-bold-w-branco-7055-9873858-1-zoom.jpg",
      name: "Tenis",
      price: 150,
      quantity: 1,
      id: 1,
    },
    {   product: "https://t-static.dafiti.com.br/Kso12qAhvfBAtgXz5TRU1LOlFJo=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-t%c3%aanis-adidas-originals-forum-bold-w-branco-7055-9873858-1-zoom.jpg",
        name: "Tenis",
        price: 150,
        quantity: 5,
        id: 2,
}]};

    dataSource:Array<CartItem> =[];

    displayedColumns:Array<string> =[
      'product',
      'name',
      'price',
      'quantity',
      'total',
      'action'
    ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items:Array<CartItem>):number {
    return items.
    map((item)=>item.price * item.quantity)
    .reduce((prev, current)=>prev + current,0)
  }

}
