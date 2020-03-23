import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;
 lots;
 total : number = 0;
 checkoutForm;
  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.lots = this.cartService.getLots();
    this.lots.forEach(function(element, index, array){
    console.info(element);
    //this.class.total += (element.price*this.lots[index]);
  });
    }

  

}