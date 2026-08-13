import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivNodeGraphe } from './interactiv-node-graphe';

describe('InteractivNodeGraphe', () => {
  let component: InteractivNodeGraphe;
  let fixture: ComponentFixture<InteractivNodeGraphe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractivNodeGraphe],
    }).compileComponents();

    fixture = TestBed.createComponent(InteractivNodeGraphe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
