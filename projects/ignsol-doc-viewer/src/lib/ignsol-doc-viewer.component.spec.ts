import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnsolDocViewerComponent } from './ignsol-doc-viewer.component';

describe('IgnsolDocViewerComponent', () => {
  let component: IgnsolDocViewerComponent;
  let fixture: ComponentFixture<IgnsolDocViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgnsolDocViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnsolDocViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
