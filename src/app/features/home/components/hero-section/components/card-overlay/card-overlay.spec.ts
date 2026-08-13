import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverlay } from './card-overlay';

describe('CardOverlay', () => {
  let component: CardOverlay;
  let fixture: ComponentFixture<CardOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOverlay],
    }).compileComponents();

    fixture = TestBed.createComponent(CardOverlay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
