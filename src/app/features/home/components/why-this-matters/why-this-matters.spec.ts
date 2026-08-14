import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyThisMatters } from './why-this-matters';

describe('WhyThisMatters', () => {
  let component: WhyThisMatters;
  let fixture: ComponentFixture<WhyThisMatters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyThisMatters],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyThisMatters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
