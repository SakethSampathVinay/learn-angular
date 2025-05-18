import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndSetInputComponent } from './get-and-set-input.component';

describe('GetAndSetInputComponent', () => {
  let component: GetAndSetInputComponent;
  let fixture: ComponentFixture<GetAndSetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAndSetInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAndSetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
