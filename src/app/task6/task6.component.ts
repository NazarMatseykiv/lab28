import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task6',
  template: `
    <input type="number" #newNumberInput>
    <button (click)="addNumber(newNumberInput.value)">Додати число</button>

    <ul>
      <li *ngFor="let number of numbers">{{ number }}</li>
    </ul>

    <p>Сума: {{ sum }}</p>
  `
})
export class Task6 {
  numbers: number[] = [];
  sum: number = 0;

  addNumber(newNumber: string) {
    const number = parseInt(newNumber, 10);
    if (!isNaN(number)) {
      this.numbers.push(number);
      this.sum += number;
    }
    newNumber = '';
  }
}
