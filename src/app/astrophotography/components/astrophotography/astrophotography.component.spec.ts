import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrophotographyComponent } from './astrophotography.component';

describe('AstrophotographyComponent', () => {
  let component: AstrophotographyComponent;
  let fixture: ComponentFixture<AstrophotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrophotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrophotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
