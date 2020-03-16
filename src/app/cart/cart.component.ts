import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;
 lots;
 total : number = 0;
  constructor(
      private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.lots = this.cartService.getLots();
    this.lots.forEach(function(element, index, array){
    console.info(element);
    //this.class.total += (element.price*this.lots[index]);
  });
    }

  

}