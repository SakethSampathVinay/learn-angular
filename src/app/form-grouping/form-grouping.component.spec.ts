import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupingComponent } from './form-grouping.component';

describe('FormGroupingComponent', () => {
  let component: FormGroupingComponent;
  let fixture: ComponentFixture<FormGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
