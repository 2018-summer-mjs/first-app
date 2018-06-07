import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor(private builInAngularHTTPClient: HttpClient) { }

  public getAvailableQuestionTypes() {
    return [
      "Multiple Choice"
      , "True/False"
      , "Essay"
      , "Short Answer"
    ];
  }
}
