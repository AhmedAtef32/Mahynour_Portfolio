import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindThePixels } from './behind-the-pixels';

describe('BehindThePixels', () => {
  let component: BehindThePixels;
  let fixture: ComponentFixture<BehindThePixels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehindThePixels],
    }).compileComponents();

    fixture = TestBed.createComponent(BehindThePixels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
