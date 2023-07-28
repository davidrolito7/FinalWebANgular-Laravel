import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRopaComponent } from './crear-ropa.component';

describe('CrearRopaComponent', () => {
  let component: CrearRopaComponent;
  let fixture: ComponentFixture<CrearRopaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRopaComponent]
    });
    fixture = TestBed.createComponent(CrearRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
