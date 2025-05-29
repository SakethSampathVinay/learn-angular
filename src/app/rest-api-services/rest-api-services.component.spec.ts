import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiServicesComponent } from './rest-api-services.component';

describe('RestApiServicesComponent', () => {
  let component: RestApiServicesComponent;
  let fixture: ComponentFixture<RestApiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestApiServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
