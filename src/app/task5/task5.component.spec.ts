import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5 } from './task5.component';

describe('Task5', () => {
  let component: Task5;
  let fixture: ComponentFixture<Task5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task5 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});