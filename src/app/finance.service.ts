import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  addTransacton() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  addTransaction(user:any){
    return this.http.post("http://localhost:3000/posts",user);
  }

  getTransaction(){
    return this.http.get("http://localhost:3000/posts");
  }

  deleteTransaction(id:any){
    return this.http.delete("http://localhost:3000/posts/"+id);
  }
}
