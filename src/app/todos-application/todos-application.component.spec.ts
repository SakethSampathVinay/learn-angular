import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosApplicationComponent } from './todos-application.component';

describe('TodosApplicationComponent', () => {
  let component: TodosApplicationComponent;
  let fixture: ComponentFixture<TodosApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
