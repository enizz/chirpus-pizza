import { Component } from '@angular/core';
import { MenuItem } from './menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chirpus-pizza';
  menuItems: MenuItem[] = [
    {
    item: "Chicken Fingers",
    category: "dinner",
    price: 11.99
    },
    {
      item: "Pizza",
      category: "dinner",
      price: 11.99
    },
    {
      item: "Wings",
      category: "side",
      price: 8.99
    },
    {
      item: "Breadsticks",
      category: "side",
      price: 4.99
    },
    {
      item: "Casar Salad",
      category: "salad",
      price: 5.99
    },
    {
      item: "Cinnamon Roll",
      category: "dessert",
      price: 8.99
    }
  ]
}
