import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondThePixels } from './beyond-the-pixels';

describe('BeyondThePixels', () => {
  let component: BeyondThePixels;
  let fixture: ComponentFixture<BeyondThePixels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeyondThePixels],
    }).compileComponents();

    fixture = TestBed.createComponent(BeyondThePixels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
