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

  // Life cycle hook.
  ngOnInit() {

    this.qtSvc.getAvailableQuestionTypes().subscribe(
      data => this.questionTypes = data.map(x => ({ name: x, checked: false }))
      , error => {
        this.errorLoadingQuestionTypes = true;
        console.log(error);
      });

    let p = this.qtSvc.getAvailableQuestionTypeCount(true);

    p.then(data => console.log(data))
      .catch(e => console.log(e));

    console.log('here');


    this.getCountAsync();
  }

  private async getCountAsync() {

      try {        
        let n = this.qtSvc.getAvailableQuestionTypeCount(true);      
        console.log("after n");
        let n2 = this.qtSvc.getAvailableQuestionTypeCount(false);      
        console.log("after n2");
        
        // let results = await Promise.race([ n, n2 ]);
        // console.log(results);

        let results = await Promise.all([ n, n2 ]);
        console.log("don't see this");
        console.log(results[0]);
        console.log(results[1]);

        console.log("here2");  
      }
      catch (cat) {
        console.log(cat);
      }
  }

}
