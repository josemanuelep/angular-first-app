import { Component } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  providers;
 constructor(private providersService: ProvidersService) { }
 ngOnInit() {
     this.providers = this.providersService.getProviders();
     console.warn(this.providers);
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/