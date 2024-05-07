import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { PrudctRequestService } from '../services/prudct-request.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  productDetails:any

  @Input()id:number=1
constructor(private activatedRoute: ActivatedRoute,private productDetailsService:PrudctRequestService){

}


 ngOnInit() {
  console.log(this.id)
  this.productDetailsService.getProductDetails(this.id).subscribe((data)=>
  {
    this.productDetails=data;
    console.log(this.productDetails)
  })
}


}