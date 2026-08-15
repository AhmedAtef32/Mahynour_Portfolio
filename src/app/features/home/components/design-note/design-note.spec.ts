import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignNote } from './design-note';

describe('DesignNote', () => {
  let component: DesignNote;
  let fixture: ComponentFixture<DesignNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignNote],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
