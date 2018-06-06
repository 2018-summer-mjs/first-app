import { Component } from '@angular/core';

@Component({
  selector: 'first-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  // quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  //   , "Quiz 3"
  // ];

  public quizzes = [
    {
      name: "Quiz 1"
      , showDelete: false
    }
    , {
      name: "Quiz 2"
      , showDelete: false
    }
    , {
      name: "Quiz 3"
      , showDelete: false
    }
  ];

  public addFunnyQuiz() {
    this.quizzes.push({
      name: "Funny Quiz"
      , showDelete: false 
    });
    //console.log(this.newQuizName);
  }

  public newQuizName; // = "foo";

  public addQuiz() {
    this.quizzes.push({ 
      name: this.newQuizName 
      , showDelete: true
    });
    this.newQuizName = "";
  }

  public deleteQuiz(quizToDelete) {
    this.quizzes = this.quizzes.filter(x => x !== quizToDelete);
  }

  //
  // Calculator behavior
  //

  public addNumberOne = 0;
  public addNumberTwo = 0;
  public addNumbersResult = 0;

  public addNumbers() {
    this.addNumbersResult = Number(this.addNumberOne) + Number(this.addNumberTwo);
  }

  //
  // Calculator Math.pow
  //

  public powNumberOne = 0;
  public powNumberTwo = 0;
  public powNumbersResult = 0;

  public powNumbers() {
    this.powNumbersResult = Math.pow(Number(this.powNumberOne), Number(this.powNumberTwo))
  }

}
