import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { RecipeModel } from '../admin/model/recipeModel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

server_url = "https://cookpedia-server-vfg3.onrender.com"
http = inject(HttpClient)

// api function : called by home & recipes component
getAllRecipes(){
  return this.http.get(`${this.server_url}/recipes`)
}
// register:called from register component
registerAPI(user:any){
  return this.http.post(`${this.server_url}/register`,user)

}
// login:called from login component
loginAPI(user:any){
  return this.http.post(`${this.server_url}/login`,user)

}

appenedToken(){
  const token = sessionStorage.getItem("token")
  let headers = new HttpHeaders()
  if (token) {
    headers = headers.append("Authorization",`Bearer ${token}`)
    
  }
  return {headers}
}
// view Recipe  : view component 
viewRecipeAPI(recipeId:string){
  return this.http.get(`${this.server_url}/recipes/${recipeId}`,this.appenedToken())

}
// get related ?cuisine
getRelatedRecipeAPI(cuisine:string){
  return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`,this.appenedToken())

}
// downloads/:id api
addToDownloadAPI(recipeId:string,reqBody:any){
return this.http.post(`${this.server_url}/downloads/${recipeId}`,reqBody,this.appenedToken())
}


// save recipe 
addToSaveRecipeAPI(recipeId:string,reqBody:any){
return this.http.post(`${this.server_url}/recipes/${recipeId}/save`,reqBody,this.appenedToken())
}

// get save recipe
getUserSaveRecipesAPI(){
  return this.http.get(`${this.server_url}/recipe-collection`,this.appenedToken())

}

//delete save recipe
removeUserSaveRecipesAPI(recipeId:string){
  return this.http.delete(`${this.server_url}/recipe-collection/${recipeId}`,this.appenedToken())
}

//add feedback
addFeedbackAPI(reqBody:any){
  return this.http.post(`${this.server_url}/feedback`,reqBody)
}

// get user download recipe
getUserDownloadListAPI(){
  return this.http.get(`${this.server_url}/user-downloads`,this.appenedToken())

}

// put request from profile
editUserPictureAPI(reqBody:any){
  return this.http.put(`${this.server_url}/user-edit`,reqBody,this.appenedToken())

}

// get appprove feedback
getApproveFeedbacksAPI(){
  return this.http.get(`${this.server_url}/feedback-approve`)

}
// admin get all users list
getUserListAPI(){
  return this.http.get(`${this.server_url}/user-list`,this.appenedToken())

}
// admin get all download list
getDownloadAPI(){
  return this.http.get(`${this.server_url}/downloads`,this.appenedToken())

}
  // add recipe admin
  addRecipeAPI(reqBody:RecipeModel){
  return this.http.post(`${this.server_url}/recipes`,reqBody,this.appenedToken())

}

  //http://localhost:3000/feedbacks get by admin feedback when page loads
  getFeedbackListAPI(){
     return this.http.get(`${this.server_url}/feedbacks`,this.appenedToken())
  }

   //http://localhost:3000/feedbacks/697866d79dc39140307a5d8b : put by feedback when approve / reject btn clicked
  updateFeedbackStatusAPI(id:string,reqBody:any){
     return this.http.put(`${this.server_url}/feedbacks/${id}`,reqBody,this.appenedToken())
  }

  // http://localhost:3000/recipes/69818fa4976f6c0b54efdb79: delete recipe by admin
    removeRecipeAPI(id:string){
     return this.http.delete(`${this.server_url}/recipes/${id}`,this.appenedToken())
  }
  
  // http://localhost:3000/recipes/6982e3baa779923ec4e95fb4:edit recipe when edit update is clicked
      editRecipeAPI(id:string,reqBody:RecipeModel){
     return this.http.put(`${this.server_url}/recipes/${id}`,reqBody,this.appenedToken())
  }

  getChartData(){
   this.getDownloadAPI().subscribe((res:any)=>{
    let downloadlistArray:any = []
    let output:any = {}
    res.forEach((item:any)=>{
      let cuisine = item.cuisine
      let currentCount = item.count
      if (cuisine in output) {
        output[cuisine] += currentCount
      } else {
        output[cuisine] = currentCount
      }
    })
    console.log(output);
    

    for(let cuisine in  output){
      downloadlistArray.push({name:cuisine,y:output[cuisine]})
    }
    localStorage.setItem("chart",JSON.stringify(downloadlistArray))
    
   })
  }


}
