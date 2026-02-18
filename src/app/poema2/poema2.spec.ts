import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poema2 } from './poema2';

describe('Poema2', () => {
  let component: Poema2;
  let fixture: ComponentFixture<Poema2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poema2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poema2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
