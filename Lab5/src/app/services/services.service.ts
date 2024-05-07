import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private card = new BehaviorSubject<number>(0);
  private items: any[] = [];

  constructor() { }

  getCard() {
    return this.card.asObservable();
  }

  updateCard(card: number) {
    this.card.next(card);
  }

  getItems() {
    return this.items;
  }

  addToCard(item: any) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  removeFromCard(item: any) {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      const currentItem = this.items[index];
      if (currentItem.quantity > 1) {
        currentItem.quantity--;
      } else {
        this.items.splice(index, 1);
      }
    }
  }

  getItemsCount() {
    return this.items.length;
  }

  getItemsPrice() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
