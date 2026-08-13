import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIThink } from './how-ithink';

describe('HowIThink', () => {
  let component: HowIThink;
  let fixture: ComponentFixture<HowIThink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowIThink],
    }).compileComponents();

    fixture = TestBed.createComponent(HowIThink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
