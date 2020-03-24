import { Component } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { products } from '../products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  providers =[];
  url ="https://www.datos.gov.co/resource/67wf-gj42.json?$query=select%20distinct%20proveedor";
 constructor(
  private providersService: ProvidersService,
 private http: HttpClient
 ) { 

 }
 ngOnInit() {
    this.getProviders();
  }
   getProviders(){
      this.http.get(this.url).toPromise().then(data => {
       for (let key in data){
            console.log(data[key].proveedor);
            this.providers.push(data[key].proveedor);
        }
            
    });
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