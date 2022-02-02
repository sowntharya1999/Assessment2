import { Component } from '@angular/core';
import { Icategory } from './Model/icategory';
import { Iproduct } from './Model/iproduct';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product';
//   products: Iproduct[] = [];
//   categories: Icategory[]=[];
//   constructor(private productService: ProductService, private categoryService: CategoryService) {
//     productService.GetProduct().subscribe((c) => { this.products = c; } );
//     categoryService.GetCategory().subscribe((p) => { this.categories = p; }
   
//     );
// }

}