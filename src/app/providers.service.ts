import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProvidersService {
  url ="https://www.datos.gov.co/resource/67wf-gj42.json?$query=select%20distinct%20proveedor";
  constructor(  private http: HttpClient) { }

  getProviders(){
      this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      return data;
      // for (let key in data)
      //   if (data.hasOwnProperty(key))
      //     this.items.push(data[key]);
    });
  }
}
