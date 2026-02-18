import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poema1 } from './poema1';

describe('Poema1', () => {
  let component: Poema1;
  let fixture: ComponentFixture<Poema1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poema1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poema1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
