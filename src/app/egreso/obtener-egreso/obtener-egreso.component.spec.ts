import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerEgresoComponent } from './obtener-egreso.component';

describe('ObtenerEgresoComponent', () => {
  let component: ObtenerEgresoComponent;
  let fixture: ComponentFixture<ObtenerEgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerEgresoComponent]
    });
    fixture = TestBed.createComponent(ObtenerEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
