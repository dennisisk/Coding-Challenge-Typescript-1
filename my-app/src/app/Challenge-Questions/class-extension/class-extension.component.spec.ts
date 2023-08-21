import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassExtensionComponent } from './class-extension.component';

describe('ClassExtensionComponent', () => {
  let component: ClassExtensionComponent;
  let fixture: ComponentFixture<ClassExtensionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassExtensionComponent]
    });
    fixture = TestBed.createComponent(ClassExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
