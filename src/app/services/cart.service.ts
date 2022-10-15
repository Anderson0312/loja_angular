import { _isTestEnvironment } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar: MatSnackBar){
    
  }

  addToCart(item: CartItem): void {

    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);

    if(itemInCart){
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({items});
    this._snackBar.open("1 Produto Adciconado no Carrinho", "ok",{duration:3000});

  }

  getTotal(items:Array<CartItem>):number {
    return items.
    map((item)=>item.price * item.quantity)
    .reduce((prev, current)=>prev + current,0)
  }

  LimparCart() : void {
    this.cart.next({items: []});
    this._snackBar.open('Limpando Carrinho','Ok',{
      duration: 3000
    });
  }

  RemoverDoCart(item: CartItem, update = true): Array<CartItem> {
    const filtradoItems = this.cart.value.items.filter(
      (_item)=> _item.id !== item.id
    );

    if(update){
    this.cart.next({items:filtradoItems});
    this._snackBar.open('Item Removido do Carrinho','Ok',{
      duration: 2000
    });
    }
    return filtradoItems;
  }

  removerQuantity(item: CartItem) : void {
    let ItemForRemoval: CartItem | undefined;
    let filterItem = this.cart.value.items.map((_item)=>{
      if(_item.id === item.id){
        _item.quantity--;

        if(_item.quantity === 0){
          ItemForRemoval = _item;
        }
      }
      return _item;
    })
    
    if(ItemForRemoval){
      filterItem = this.RemoverDoCart(ItemForRemoval, false);
    }
      this.cart.next({items:filterItem});    
      this._snackBar.open('foi Removido 1 item do Carrinho','Ok',{
        duration: 2000
      });  
    
  }

  
}
