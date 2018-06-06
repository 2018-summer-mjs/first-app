import { Component, OnInit } from '@angular/core';
import { QuestionTypeService } from '../question-type.service';

@Component({
  selector: 'app-choose-question-type-component',
  templateUrl: './choose-question-type-component.component.html',
  styleUrls: ['./choose-question-type-component.component.css']
})
export class ChooseQuestionTypeComponentComponent implements OnInit {

  constructor(private qtSvc: QuestionTypeService) { }

  // view model properties ...
  public questionTypes: string[];


  // life cycle hook.
  ngOnInit() {
    this.questionTypes = this.qtSvc.getAvailableQuestionTypes();
  }

}
