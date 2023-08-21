import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalDefaultParametersComponent } from './optional-default-parameters.component';

describe('OptionalDefaultParametersComponent', () => {
  let component: OptionalDefaultParametersComponent;
  let fixture: ComponentFixture<OptionalDefaultParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionalDefaultParametersComponent]
    });
    fixture = TestBed.createComponent(OptionalDefaultParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
