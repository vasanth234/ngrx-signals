import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matdialog } from './matdialog';

describe('Matdialog', () => {
  let component: Matdialog;
  let fixture: ComponentFixture<Matdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matdialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
