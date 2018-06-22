import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuggetDisplayComponent } from './nugget-display.component';

describe('NuggetDisplayComponent', () => {
  let component: NuggetDisplayComponent;
  let fixture: ComponentFixture<NuggetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuggetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuggetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
