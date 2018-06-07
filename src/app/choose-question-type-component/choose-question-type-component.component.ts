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
  public questionTypes: QuestionTypeDisplay[];
  public errorLoadingQuestionTypes = false;
  
  // Life cycle hook.
  ngOnInit() {

    this.qtSvc.getAvailableQuestionTypes()
      .subscribe(data => this.questionTypes = 
        data.map(x => ({ name: x, checked: false }))
        , error => this.errorLoadingQuestionTypes = true
      );

    this.qtSvc.getAvailableQuestionTypeCount(true)
      .then(data => console.log(data))
      .catch(error => console.log(error));

    this.getCountAsync();
  }

  private async getCountAsync() {

    try {
      let count = await this.qtSvc.getAvailableQuestionTypeCount(false);
      console.log(count);  
    }

    catch(error) {
      console.log(error)
    }
  }
}
