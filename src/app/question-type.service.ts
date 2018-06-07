import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor(private builtInAngularHTTPClient:HttpClient) { }

  public getAvailableQuestionTypes() {

    // make a call to http://modern-js.azurewebsites.net/api/GetQuestionTypes?name=foo to get data

    return this.builtInAngularHTTPClient.get<string[]>("https://modern-js.azurewebsites.net/api/GetQuestionTypes?name=foo");
    // return [
    //   "Multiple Choice"
    //   , "True/False"
    //   , "Essay"
    //   , "Short Answer"
    // ];


  }
}
