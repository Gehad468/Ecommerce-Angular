import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private cardService:ServicesService) { }
 
 counter:any=0
  ngOnInit()
  {
    this.cardService.getCard().subscribe((res:any)=>this.counter=res);
  }
}
