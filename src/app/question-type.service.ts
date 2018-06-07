import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor(private builtInAngularHttpClient: HttpClient) { }
  //promise is done in thebackground.  
  public getAvailableQuestionTypes() {
    return this.builtInAngularHttpClient
      .get<string[]>("https://modern-js.azurewebsites.net/api/GetQuestionTypes?name=magic%20Quiz");


    // public getAvailableQuestionTypes() {
    //   return this.builtInAngularHttpClient
    //     .get<string[]>("https://modern-js.azurewebsites.net/api/GetQuestionTypes?name1=magic%20Quiz");


    // return [
    //   "Multiple Choice"
    //   , "True/False"
    //   , "Essay"
    //   , "Short Answer"
    // ];
  }

  public getAvailableQuestionTypeCount(succeed: boolean): Promise<number> {
    let p = new Promise<number>(
      (resolve, reject) => {
        succeed ? resolve(42) : reject("failed")
      }
    );

    return p; //return the promise of a number...
  }
}
