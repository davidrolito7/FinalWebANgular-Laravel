import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsarioComponent } from './crear-usario.component';

describe('CrearUsarioComponent', () => {
  let component: CrearUsarioComponent;
  let fixture: ComponentFixture<CrearUsarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearUsarioComponent]
    });
    fixture = TestBed.createComponent(CrearUsarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
