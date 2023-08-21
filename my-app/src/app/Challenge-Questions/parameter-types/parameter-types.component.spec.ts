import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterTypesComponent } from './parameter-types.component';

describe('ParameterTypesComponent', () => {
  let component: ParameterTypesComponent;
  let fixture: ComponentFixture<ParameterTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParameterTypesComponent]
    });
    fixture = TestBed.createComponent(ParameterTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
