import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor() { }

  public getAvailableQuestionTypes(){
    return [
      "Multiple Choice"
      , "True/False"
      , "Essay"
      , "Short Answer"
    ];
  }
}
