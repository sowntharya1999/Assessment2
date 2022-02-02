import { Injectable } from '@angular/core';
import { Iproduct } from '../Model/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    console.log("Coming from service");
  }
  //get
  GetProduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>("http://localhost:8082/api/productTables");
  }
  //post
  SaveNewProduct(product: Iproduct) {

    return this.http.post("http://localhost:8082/api/productTables", product);
  }
  //put
  UpdateProduct(product : Iproduct) {
    console.log(product);
    return this.http.put("http://localhost:8082/api/productTables/" + product.id, product);
  }

  RemoveProduct(id: number) {
    return this.http.delete("http://localhost:8082/api/productTables/" + id);
  }
}