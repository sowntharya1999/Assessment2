import { Component, OnInit } from '@angular/core';
import { Icategory } from '../Model/icategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: Icategory = {} as Icategory;

  txtId: number = 0;
  txtweight: number = 0;
  txtprocessor: string="";
  txtram: string = "";
  categories: Icategory[]=[];
  
  constructor(private categoryService: CategoryService) {
    
      categoryService.GetCategory().subscribe((p) => { this.categories = p; }
     
      );
  
  
  }
  SaveCategory(): void {
    this.category.id = this.txtId;
    this.category.Weight = this.txtweight;
    this.category.Processor = this.txtprocessor;
    this.category.Ram = this.txtram;
  
    
    
    this.categoryService.SaveNewCategory(this.category).subscribe(res => { console.log(res); });
  }

  UpdateCategory(): void {
    this.category.id = this.txtId;
    this.category.Weight = this.txtweight;
    this.category.Processor = this.txtprocessor;
    this.category.Ram = this.txtram;
    
    this.categoryService.UpdateCategory(this.category).subscribe(res => { console.log(res); });
  }

  DeleteCategory(): void {
    this.categoryService.RemoveCategory(this.txtId).subscribe(res => console.log(res));
  }
  ngOnInit(): void {
  }

}
