import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSectionComponent } from './character-section.component';

describe('CharacterSectionComponent', () => {
  let component: CharacterSectionComponent;
  let fixture: ComponentFixture<CharacterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
