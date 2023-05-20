import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  template: `
    <input type="checkbox" [checked]="showOnlyWithP" (change)="onCheckboxChange($event)">
    <ul>
      <li *ngFor="let country of filteredCountries">{{ country }}</li>
    </ul>
  `
})
export class Task3 {
  countries: string[] = ['Україна', 'Польща', 'США', 'Бразилія'];
  showOnlyWithP: boolean = false;

  onCheckboxChange(event: any) {
    this.showOnlyWithP = event.target.checked;
  }

  get filteredCountries(): string[] {
    if (this.showOnlyWithP) {
      return this.countries.filter(country => country.toLowerCase().includes('п'));
    }
    return this.countries;
  }
}
