import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2 } from './task2.component';

describe('Task2', () => {
  let component: Task2;
  let fixture: ComponentFixture<Task2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});