import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];
  lot = [];
  totals : number =0;
constructor(
    private http: HttpClient
  ) {}
  addToCart(product) {
    if(this.items.find(phone => phone.name === product.name)){
     this.lot[this.items.indexOf(product)] +=1;

    }else{
      this.items.push(product);
      this.lot[this.items.indexOf(product)] = 1;
    }
  }

  getItems() {
    return this.items;
  }
  getLots(){
    return this.lot;
  }

  clearCart() {
    this.items = [];
    this.lot = [];
    return this.items;
  }
   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  getTotalToPay(carItems, lots){
    let total = 0;
    carItems.forEach(function(element, index, array){
    total = total + (element.price*lots[index]);
    console.info(total);
  });
  return total;
  }
}