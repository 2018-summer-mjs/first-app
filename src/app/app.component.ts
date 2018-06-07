import { Component, ViewChild } from '@angular/core';
import { ChooseQuestionTypeComponentComponent } from './choose-question-type-component/choose-question-type-component.component';


interface QuizDisplay {
  name: string;
  showDelete: boolean;
  summary?: string;
}

@Component({
  selector: 'first-app',
  templateUrl: './app.component.html',
  //template: '<h1>Hi</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  // quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  //   , "Quiz 3"
  // ];

  // decorating the child with the property
  @ViewChild(ChooseQuestionTypeComponentComponent)
  public qtComp: ChooseQuestionTypeComponentComponent


  public quizzes: QuizDisplay[] = [
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

  //
  // add a new quiz to the list
  //
  public addQuiz() {

    // filter out only the true from the array
    // map thru the objects and emit the name only
    // join array with , and space 
    let summary = this.qtComp.questionTypes
          .filter(x => x.checked === true)
          .map(x => x.name)
          .join(', ');

    // display questionTypes array to the console
    //console.log(this.qtComp.questionTypes);
    console.log(summary);

    this.quizzes.push({ 
      name: this.newQuizName
      , showDelete: true
      , summary: summary
    });
    this.newQuizName = "";
  }

  public deleteQuiz(quizToDelete) {
    this.quizzes = this.quizzes.filter(x => x !== quizToDelete);
  }

  //
  // Calculator behavior
  //

  // Addition
  public addNumberOne = 0;
  public addNumberTwo = 0;
  public addNumbersResult = 0;

  public subtractNumberOne = 0;
  public subtractNumberTwo = 0;
  public subtractNumbersResult = 0;

  public addNumbers() {
    this.addNumbersResult = Number(this.addNumberOne) + Number(this.addNumberTwo);
  }
  
  // Modulo Behavior
  public modNumberOne = 0;
  public modNumberTwo = 0;
  public modNumbersResult = 0;

  public modNumbers() {

    this.modNumbersResult = Number(this.modNumberOne) % Number(this.modNumberTwo);
  }

  // Subtraction
  public subtractNumbers() {
    this.subtractNumbersResult = Number(this.subtractNumberOne) - Number(this.subtractNumberTwo);
  }

  // Multiplication
  public multiplyNumberOne = 0;
  public multiplyNumberTwo = 0;
  public multiplyNumbersResult = 0;

  public multiplyNumbers() {
    this.multiplyNumbersResult = Number(this.multiplyNumberOne) * Number(this.multiplyNumberTwo);
  }

  // Division
  public divideNumberOne = 0;
  public divideNumberTwo = 0;
  public divideNumbersResult = 0;

  public divideNumbers() {
    this.divideNumbersResult = Number(this.divideNumberOne) / Number(this.divideNumberTwo);
  }

  // Math.pow
  public powNumberOne = 0;
  public powNumberTwo = 0;
  public powNumbersResult = 0;

  public powNumbers() {
    this.powNumbersResult = Math.pow(Number(this.powNumberOne), Number(this.powNumberTwo))

  }

}
