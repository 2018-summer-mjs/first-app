import { Component, OnInit } from '@angular/core';
import { QuestionTypeService } from '../question-type.service';

interface QuestionTypeDisplay {

  name: string;
  checked: boolean;
}


@Component({
  selector: 'app-choose-question-type-component',
  templateUrl: './choose-question-type-component.component.html',
  styleUrls: ['./choose-question-type-component.component.css']
})
export class ChooseQuestionTypeComponentComponent implements OnInit {

  constructor(private questionTypeSvc: QuestionTypeService) { }

  // View Model Properties
  public questionTypes: QuestionTypeDisplay[] = [];
  public errorLoadingQuestionTypes: boolean;
  
  // Life Cycle hook


  ngOnInit() {
    this.questionTypeSvc.getAvailableQuestionTypes().subscribe(
      data => this.questionTypes = data.map(x => ({ name: x, checked: false}))
      , error => this.errorLoadingQuestionTypes = true
    );
  }

}
