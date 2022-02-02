import { Injectable } from '@angular/core';
import { Icategory } from '../Model/icategory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
    console.log("Coming from service");
  }
  //get
  GetCategory(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>("http://localhost:8081/api/categoryTables");
  }
  //post
  SaveNewCategory(category: Icategory) {

    return this.http.post("http://localhost:8081/api/categoryTables", category);
  }
  //put
  UpdateCategory(category : Icategory) {
    console.log(category);
    return this.http.put("http://localhost:8081/api/categoryTables/" + category.id, category);
  }

  RemoveCategory(id: number) {
    return this.http.delete("http://localhost:8081/api/categoryTables/" + id);
  }
}

