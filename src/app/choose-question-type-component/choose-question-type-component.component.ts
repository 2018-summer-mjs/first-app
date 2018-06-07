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

  // View Model Properties...
  public questionTypes: QuestionTypeDisplay[] = [];
  public errorLoadingQuestionTypes: boolean = false;

  // Life cycle hook

  ngOnInit() {
    this.qtSvc.getAvailableQuestionTypes().subscribe(
      data => this.questionTypes = data.map(x => ({ name: x, checked: false }))
      , error => {
        this.errorLoadingQuestionTypes = true;
        console.log(error);
      }
    );

    // promise call
    let p = this.qtSvc.getAvailableQuestionTypeCount(true);

    p
    .then(data => console.log(data)) // promise is good
    .catch(e => console.log(e))      // bad promise

    // older way with async method
    this.getCountAsync();
  }

  private async getCountAsync() {
    try {
      let n  = await this.qtSvc.getAvailableQuestionTypeCount(true);
      console.log(n);
    } catch (e) {
      console.log(e);
    }
  }

}
