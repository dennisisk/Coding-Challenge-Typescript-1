import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompounderComponent } from './compounder.component';

describe('CompounderComponent', () => {
  let component: CompounderComponent;
  let fixture: ComponentFixture<CompounderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompounderComponent]
    });
    fixture = TestBed.createComponent(CompounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
