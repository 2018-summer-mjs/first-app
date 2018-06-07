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

  // Make the Question Type Component available to the root
  @ViewChild(ChooseQuestionTypeComponentComponent)
  public qtComponent: ChooseQuestionTypeComponentComponent;


  title = 'first-app';
  //
  // Create Quizzes Object
  //
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

  //
  // Add The Funny Quiz to Quiz Object
  //
  public addFunnyQuiz() {
    this.quizzes.push({
      name: "Funny Quiz"
      , showDelete: false 
    });
    //console.log(this.newQuizName);
  }

  public newQuizName; // = "foo";

  //
  // Add user Quiz to Quiz Object
  //
  public addQuiz() {

    let summaryText = this.qtComponent.questionTypes
      .filter(x => x.checked)
      .map(x => x.name)
      .join(", ");

    summaryText = summaryText.length > 0 ? `(${summaryText})` : "";

    console.log(summaryText);


    
    this.quizzes.push({ 
      name: this.newQuizName 
      , showDelete: true
      , summary: summaryText
    });
    
    console.log(this.quizzes);
    this.newQuizName = "";
  }

  // Delete Quiz from Quiz Object
  public deleteQuiz(quizToDelete) {
    this.quizzes = this.quizzes.filter(x => x !== quizToDelete);
  }

  /////////////////////////////////////
  // Calculator behavior
  /////////////////////////////////////

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
