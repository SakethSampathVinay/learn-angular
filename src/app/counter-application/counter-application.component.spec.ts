import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterApplicationComponent } from './counter-application.component';

describe('CounterApplicationComponent', () => {
  let component: CounterApplicationComponent;
  let fixture: ComponentFixture<CounterApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
