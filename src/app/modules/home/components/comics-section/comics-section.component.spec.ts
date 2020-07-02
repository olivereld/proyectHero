import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsSectionComponent } from './comics-section.component';

describe('ComicsSectionComponent', () => {
  let component: ComicsSectionComponent;
  let fixture: ComponentFixture<ComicsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
