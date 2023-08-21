import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesSimpleComponent } from './modules-simple.component';

describe('ModulesSimpleComponent', () => {
  let component: ModulesSimpleComponent;
  let fixture: ComponentFixture<ModulesSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulesSimpleComponent]
    });
    fixture = TestBed.createComponent(ModulesSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
