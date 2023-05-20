import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  template: `
    <input type="text" #checkboxInput (input)="updateCheckboxes(checkboxInput.value)">
    
    <div>
      <input type="checkbox" *ngFor="let checkbox of checkboxes; let i = index" 
        [checked]="selectedCheckboxes.includes(i)"
        (change)="toggleCheckbox(i)"> <br>
        {{ checkboxes }}
    </div>
  `
})
export class Task4 {
  checkboxes: string[] = ['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4'];
  selectedCheckboxes: number[] = [];

  toggleCheckbox(index: number) {
    if (this.selectedCheckboxes.includes(index)) {
      const checkboxIndex = this.selectedCheckboxes.indexOf(index);
      this.selectedCheckboxes.splice(checkboxIndex, 1);
    } else {
      this.selectedCheckboxes.push(index);
    }
  }

  updateCheckboxes(inputValue: string) {
    const numbers = inputValue.split(',').map(Number);
    this.selectedCheckboxes = numbers.filter((number: number) => number >= 0 && number < this.checkboxes.length);
  }
}
