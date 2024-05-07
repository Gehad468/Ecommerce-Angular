import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import * as Products from "../../assets/products-list.json"
import { PrudctRequestService } from '../services/prudct-request.service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  
  // products:any=Products
  products:any[]=[]
  constructor(private productrequestService:PrudctRequestService,private cartService:ServicesService){}

  ngOnInit() {
    this.productrequestService.getProductRequest().subscribe((data) => {
    this.products=data.products;
    console.log(this.products)
    });
  }

  addToCard(product:any){
    this.cartService.addToCard(product)
  }
}
