import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

server_url = "http://localhost:3000"
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
  return this.http.get(`${this.server_url}/feedbacks-approve`)

}
// admin get all users list
getUserListAPI(){
  return this.http.get(`${this.server_url}/user-list`,this.appenedToken())

}
// admin get all download list
getDownloadAPI(){
  return this.http.get(`${this.server_url}/downloads`,this.appenedToken())

}
  
}
