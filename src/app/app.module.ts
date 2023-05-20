import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1 } from './task1/task1.component';
import { Task2 } from './task2/task2.component';
import { Task3 } from './task3/task3.component';
import { Task4 } from './task4/task4.component';
import { Task5 } from './task5/task5.component';
import { Task6 } from './task6/task6.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1,
    Task2,
    Task3,
    Task4,
    Task5,
    Task6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
