import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionsAliasesConstEnumsComponent } from './unions-aliases-const-enums.component';

describe('UnionsAliasesConstEnumsComponent', () => {
  let component: UnionsAliasesConstEnumsComponent;
  let fixture: ComponentFixture<UnionsAliasesConstEnumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnionsAliasesConstEnumsComponent]
    });
    fixture = TestBed.createComponent(UnionsAliasesConstEnumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
