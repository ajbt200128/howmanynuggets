import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarinputComponent } from './dollarinput.component';

describe('DollarinputComponent', () => {
  let component: DollarinputComponent;
  let fixture: ComponentFixture<DollarinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
