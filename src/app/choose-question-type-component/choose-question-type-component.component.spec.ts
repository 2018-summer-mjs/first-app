import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuestionTypeComponentComponent } from './choose-question-type-component.component';

describe('ChooseQuestionTypeComponentComponent', () => {
  let component: ChooseQuestionTypeComponentComponent;
  let fixture: ComponentFixture<ChooseQuestionTypeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseQuestionTypeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseQuestionTypeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
