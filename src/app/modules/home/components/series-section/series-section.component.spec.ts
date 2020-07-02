import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSectionComponent } from './series-section.component';

describe('SeriesSectionComponent', () => {
  let component: SeriesSectionComponent;
  let fixture: ComponentFixture<SeriesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
