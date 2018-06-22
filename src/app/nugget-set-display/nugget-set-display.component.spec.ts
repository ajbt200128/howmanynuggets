import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuggetSetDisplayComponent } from './nugget-set-display.component';

describe('NuggetSetDisplayComponent', () => {
  let component: NuggetSetDisplayComponent;
  let fixture: ComponentFixture<NuggetSetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuggetSetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuggetSetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
