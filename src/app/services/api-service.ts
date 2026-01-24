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

  
}
