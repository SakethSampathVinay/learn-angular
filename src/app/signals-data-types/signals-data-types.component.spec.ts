import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsDataTypesComponent } from './signals-data-types.component';

describe('SignalsDataTypesComponent', () => {
  let component: SignalsDataTypesComponent;
  let fixture: ComponentFixture<SignalsDataTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsDataTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsDataTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
