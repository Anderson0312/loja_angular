import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { async } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.models';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart:Cart)=>{
      this.cart = _cart;
      this.dataSource = this.cart.items;
  })};
  

  getTotal(items:Array<CartItem>):number {
    return this.cartService.getTotal(items)
  }

  onLimparCart():void{
    this.cartService.LimparCart();
  }

  onRemoverDoCart(item:CartItem):void{
    this.cartService.RemoverDoCart(item);
  }

  OnAddQuantidade(item:CartItem):void{
    this.cartService.addToCart(item);
  }
  OnremoveQuantidade(item:CartItem):void{
    this.cartService.removerQuantity(item);
  }

  OnComprarCkecar():void {
    this.http.post('http://localhost:4242/checkout',{
      items: this.cart.items
    }).subscribe(async(res:any) => {
      let stripe = await loadStripe
      //chave publica 
      ('pk_test_51Lt0sxCmHaaYVWvZU1LEdIQgHI6Y0g5Wb3WvjcfS0FlDmBSAXZeUHoylLitdLvEyt9VWNZ8hk9CPxZ0LvwpEJq4h00bLJDqooy');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    });
  }
}
