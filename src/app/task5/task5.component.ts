import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
    <button (click)="updateUsers()">Оновити</button>
  `
})
export class Task5 {
  users: string[] = ['Микола', 'Василь', 'Петро'];
  additionalUsers: string[] = ['Іван', 'Дмитро', 'Андрій'];

  updateUsers() {
    if (this.additionalUsers.length > 0) {
      const newUser = this.additionalUsers.shift(); // Видаляємо перший елемент з additionalUsers
      if (newUser) {
        this.users.push(newUser); // Додаємо його до кінця списку users
      }
    }
  }
}
