import { Component, inject,signal } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-recipes',
  imports: [Header,Footer],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {


  allRecipes:any = signal([])

  api = inject(ApiService)
    ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
   this.api.getAllRecipes().subscribe((res:any)=>{
    console.log(res);
    this.allRecipes.set(res)
    console.log(this.allRecipes());
    
    
    
   })
  }

}
