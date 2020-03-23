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
    this.total = this.cartService.getTotalToPay(this.items, this.lots);
    }
onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }
  

}