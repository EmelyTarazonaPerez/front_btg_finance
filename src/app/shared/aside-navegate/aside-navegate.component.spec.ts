import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNavegateComponent } from './aside-navegate.component';

describe('AsideNavegateComponent', () => {
  let component: AsideNavegateComponent;
  let fixture: ComponentFixture<AsideNavegateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideNavegateComponent]
    });
    fixture = TestBed.createComponent(AsideNavegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
