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
  
}
