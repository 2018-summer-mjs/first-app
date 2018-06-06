import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor() { }

  public getAvailableQuestionTypes() {
    return [
      "Muliple Choice"
      , "True/False"
      , "Essay"
      , "Short Answer"
    ];
  }
}
