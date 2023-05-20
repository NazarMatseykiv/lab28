import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4 } from './task4.component';

describe('Task4', () => {
  let component: Task4;
  let fixture: ComponentFixture<Task4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task4 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
