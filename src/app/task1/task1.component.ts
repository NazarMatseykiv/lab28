import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task1',
  template: `
    <input type="text" #newCountryInput>
    <button (click)="addCountry(newCountryInput.value)">Додати країну</button>
    <br>
    <input type="text" #deleteCountryInput>
    <button (click)="deleteCountry(deleteCountryInput.value)">Видалити країну</button>

    <ul>
      <li *ngFor="let country of countries">{{ country }}</li>
    </ul>
  `
})
export class Task1 {
  countries: string[] = [];

  @ViewChild('newCountryInput', { static: false }) newCountryInput!: ElementRef<HTMLInputElement>;
  @ViewChild('deleteCountryInput', { static: false }) deleteCountryInput!: ElementRef<HTMLInputElement>;

  addCountry(countryName: string) {
    const trimmedName = countryName.trim();
    if (trimmedName !== '') {
      this.countries.push(trimmedName);
      this.countries.sort();
      this.newCountryInput.nativeElement.value = ''; // Очищення поля введення
    }
  }

  deleteCountry(countryName: string) {
    const index = this.countries.indexOf(countryName);
    if (index !== -1) {
      this.countries.splice(index, 1);
      this.deleteCountryInput.nativeElement.value = ''; // Очищення поля введення
    }
  }
}
