import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrudctRequestService {

  constructor(private http :HttpClient) {
}
 getProductRequest():Observable<any>
 {
   return this.http.get("https://dummyjson.com/products");
 }

getProductDetails(id:number)
{
  return this.http.get(`https://dummyjson.com/products/${id}`);
}


}