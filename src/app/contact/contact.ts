import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  name: string = ''
  email: string = ''
  message: string = ''

  api = inject(ApiService)

  // submitFeedback() {
  //   const reqBody = {
  //     name: this.name,
  //     email: this.email,
  //     message: this.message
  //   }
  //     this.name = ''
  //     this.email = ''
  //     this.message = ''
      
  //   this.api.addFeedbackAPI(reqBody).subscribe((res:any)=>{
  //     console.log(res)
     
  //     alert('Feedback submitted successfully')
  //   })
  // }

  addFeedBack(){
    if (this.name && this.email && this.message) {
      this.api.addFeedbackAPI({name:this.name,email:this.email,message:this.message}).subscribe((res:any)=>{
        alert("Thank you for your feedback")
        this.name = ''
        this.email = ''
        this.message = ''
      })
      
    } else {
      alert("please fill the form completely")
    }
  }

}
