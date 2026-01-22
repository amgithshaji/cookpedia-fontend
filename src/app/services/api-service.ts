import { HttpClient } from '@angular/common/http';
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
  
}
