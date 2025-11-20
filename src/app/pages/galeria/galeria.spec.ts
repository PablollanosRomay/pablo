import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GALERIA } from './galeria';

describe('GALERIA', () => {
  let component: GALERIA;
  let fixture: ComponentFixture<GALERIA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GALERIA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GALERIA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
