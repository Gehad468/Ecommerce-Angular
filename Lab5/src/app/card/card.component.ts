import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  counter = 0;
  items: any[] = [];

  constructor(public cardService: ServicesService) {}

  ngOnInit() {
    this.cardService.getCard().subscribe(res => {
      this.counter = res;
    });
    this.items = this.cardService.getItems();
  }

  increment(item: any) {
    item.quantity++;
    this.cardService.updateCard(this.calculateTotalItems());
  }

  decrement(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cardService.updateCard(this.calculateTotalItems());
    }
  }

  addToCart(item: any) {
    this.cardService.addToCard(item);
    this.cardService.updateCard(this.calculateTotalItems());
  }

  removeFromCard(item: any) {
    this.cardService.removeFromCard(item);
    this.cardService.updateCard(this.calculateTotalItems());
  }

  calculateTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
}