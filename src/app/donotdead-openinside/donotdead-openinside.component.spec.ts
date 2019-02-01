import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonotdeadOpeninsideComponent } from './donotdead-openinside.component';

describe('DonotdeadOpeninsideComponent', () => {
  let component: DonotdeadOpeninsideComponent;
  let fixture: ComponentFixture<DonotdeadOpeninsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonotdeadOpeninsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonotdeadOpeninsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
