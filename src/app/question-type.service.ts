import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor(private angularBuiltInHttpService: HttpClient) { }

  public getAvailableQuestionTypes() {
    // return [
    //   "Multiple Choice"
    //   , "True/False"
    //   , "Essay"
    //   , "Short Answer"
    // ];
    return this.angularBuiltInHttpService.get<string[]>("https://modern-js.azurewebsites.net/api/GetQuestionTypes?name=foo");
  }
}
