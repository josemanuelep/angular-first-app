import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [];
  lot = [];

  addToCart(product) {
    if(!this.items.find(product)){
      this.items.push(product);
      this.lot[this.items.indexOf(product)] +=1;
    }else{
      this.lot[this.items.indexOf(product)] +=1;
    }
  }

  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }
}