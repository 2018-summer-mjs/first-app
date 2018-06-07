import { Component, OnInit } from '@angular/core';
import { QuestionTypeService } from '../question-type.service';

interface QuestionTypeDisplay{
  name: string;
  checked: boolean;
}


@Component({
  selector: 'app-choose-question-type-component',
  templateUrl: './choose-question-type-component.component.html',
  styleUrls: ['./choose-question-type-component.component.css']
})

// export is a class visable
export class ChooseQuestionTypeComponentComponent implements OnInit {

  // private qtSvc: QuestionTypeService;
  // constructor(/*private */ qtSvc123:QuestionTypeService){
  //   this.qtSvc = qtSvc123;
  // }

  // this causes the dependency injection
  constructor(private qtSvc: QuestionTypeService) { }

  // view model properties ...
  //public questionTypes: string[];
  public questionTypes: QuestionTypeDisplay[];


  // life cycle hook.
  ngOnInit() {
    //this.questionTypes = this.qtSvc.getAvailableQuestionTypes();
    this.questionTypes = this.qtSvc.getAvailableQuestionTypes().map(x => ({ name: x, checked: false}) );
  }

}
