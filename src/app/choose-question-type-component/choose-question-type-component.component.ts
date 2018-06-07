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
        this.questionTypes = data.map(x => ({ name: x, checked: false }));
        console.log(data);
      }
      , error => {
        this.errorLoadingQuestionTypes = true;
        console.log(error);
      }
    );


    // .map(x => ({ name: x, checked: false }))

    let p = this.qtSvc.getAvailableQuestionTypeCount(true);

    p
      .then(data => console.log(data))
      .catch(e => console.log(e));

    console.log("After the Promise call...");

    this.getCountAsync();

  } // end ngOnInit()

  private async getCountAsync() {

    try {
      let n = await this.qtSvc.getAvailableQuestionTypeCount(true);
      console.log(n);
      console.log("ASYNC/AWAIT Try");
    } catch {
      console.log("ASYNC/AWAIT Catch");
    }

  }


}
