import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTalk } from './lets-talk';

describe('LetsTalk', () => {
  let component: LetsTalk;
  let fixture: ComponentFixture<LetsTalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsTalk],
    }).compileComponents();

    fixture = TestBed.createComponent(LetsTalk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
