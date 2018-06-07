import { Injectable } from '@angular/core';

// need this statement in order to inject it into the 'oven'
@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor() { }

  // 
  public getAvailableQuestionTypes(){
    return [
      "Multiple Choice"
      , "True/False"
      , "Essay"
      , "Short Answer"
      , "Multiple Answer"
    ];
  }
}
