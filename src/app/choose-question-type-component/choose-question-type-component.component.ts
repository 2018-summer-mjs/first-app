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

  constructor(private qtSvc: QuestionTypeService) { }

  // View Model properties...
  public questionTypes: QuestionTypeDisplay[] = [];
  public errorLoadingQuestionTypes = false;



  // Life cycle hook

  ngOnInit() {

    this.qtSvc.getAvailableQuestionsTypes().subscribe(
          data => {
            this.questionTypes = data.map( x => ({ name: x, checked: false }));
            console.log(data);
          }
          , error => {
            this.errorLoadingQuestionTypes = true;
            console.log(error);
          }
      );
    
    
    // .map(x => ({ name: x, checked: false }))
  }

}
