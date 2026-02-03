import { Component,inject, signal } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RouterLink } from "@angular/router";
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  feedbacks:any = signal([[]])
  
  allRecipes:any = signal([])
  api = inject(ApiService)

  ngOnInit(){
    this.getAllRecipes()
     this.getFeedbacks()
  }

  getAllRecipes(){
    this.api.getAllRecipes().subscribe((res:any)=>{
      // console.log(res);
      this.allRecipes.set(res.slice(0,6))
      console.log(this.allRecipes());
      
    })
  }

  getFeedbacks(){
    this.api.getApproveFeedbacksAPI().subscribe((res:any)=>{
      this.feedbacks.set(res)
    })
  }

}
