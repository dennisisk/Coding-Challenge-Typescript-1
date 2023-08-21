import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorJqueryComponent } from './calculator-jquery.component';

describe('CalculatorJqueryComponent', () => {
  let component: CalculatorJqueryComponent;
  let fixture: ComponentFixture<CalculatorJqueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorJqueryComponent]
    });
    fixture = TestBed.createComponent(CalculatorJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
