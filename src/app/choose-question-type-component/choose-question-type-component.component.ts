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
  public questionTypes: QuestionTypeDisplay[] = []; //need to initialize this array
  public errorLoadingQuestionTypes: boolean;

  // Life cycle hook.
  ngOnInit() {



    // this.questionTypes = this.qtSvc.getAvailableQuestionTypes().map(x => ({ name: x, checked: false }));


    this.qtSvc.getAvailableQuestionTypes().subscribe(
      data => this.questionTypes = data.map(x => ({ name: x, checked: false }))
      , error => {
        this.errorLoadingQuestionTypes = true;
        console.log(error);
      }
    );

    //test the failure
    // let p = this.qtSvc.getAvailableQuestionTypeCount(false);

    //the success
    let p = this.qtSvc.getAvailableQuestionTypeCount(true);

    //when the promise is resolved, run the then... if error, run catch.. 
    p.then(data => console.log(data))
      .catch(e => console.log(e));

    console.log("here");


    this.getCountAsync();
  }

  //we will await the asyncronous calls.  When the promise resolves, will assign this to n.
  private async getCountAsync() {

    try {
      // let n = await this.qtSvc.getAvailableQuestionTypeCount(true);  //function stops here until the promise resolves successfully
      // let n2 = await this.qtSvc.getAvailableQuestionTypeCount(false);  //function stops here until the promise resolves successfully
      // console.log(n);
      // console.log("here2");


      let n = this.qtSvc.getAvailableQuestionTypeCount(false);  //function stops here until the promise resolves successfully
      let n2 = this.qtSvc.getAvailableQuestionTypeCount(true);  //function stops here until the promise resolves successfully
      console.log(n);
      console.log("here2");


      //try a race condition, only take the first one
      // let results = await Promise.race([n, n2]);
      // console.log(results);

      //returns an array.   all of them must resovle properly.  
      let results = await Promise.all([n, n2]);
      console.log(results[0]);
      console.log(results[1]);
      console.log("here2");
    }

    catch (cat) {
      console.log(cat);
    }
  }
}
