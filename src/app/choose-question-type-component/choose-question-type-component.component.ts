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
  public questionTypes: QuestionTypeDisplay[] = [];  // initialize to empty array
  public errorLoadingQuestionTypes: boolean;

  // Life cycle hook.
  ngOnInit() {

    // this.questionTypes = this.qtSvc.getAvailableQuestionTypes().map(x => ({ name: x, checked: false }));
    this.qtSvc.getAvailableQuestionTypes().subscribe(
      //data => console.log(data)
      data => this.questionTypes = data.map (x => ({ name: x, checked: false}) )
      //, error => console.log(error)
      , error => this.errorLoadingQuestionTypes = true
    );

    // use promise
    let p = this.qtSvc.getAvailableQuestionTypeCount(true);

    // chained promise display
    p
      .then(data => console.log(data))
      .catch(e => console.log(e));

    console.log('here');

    this.getCountAsync();

  }


  private async getCountAsync() {
    try {
      // runs sequentiall
      // let n = await this.qtSvc.getAvailableQuestionTypeCount(true);
      // let n2 = await this.qtSvc.getAvailableQuestionTypeCount(false);
      
      // set up to run parallel
      let n = this.qtSvc.getAvailableQuestionTypeCount(true);
      console.log('after ' + n);
      let n2 = this.qtSvc.getAvailableQuestionTypeCount(false);
      console.log('after ' + n2);

      let results = await Promise.all([ n, n2 ]); // runs in parallel waiting for all to finish
      
      // let results = await Promise.race([ n, n2 ]); // runs in parallel, but finishes when first when comes back
      // console.log(results);


      console.log('async ' + results[0]);
      console.log('here2');
      console.log('async ' + results[1]);
    } 
    catch (cat) {
      console.log(cat);
    }
  }
    
  

}
