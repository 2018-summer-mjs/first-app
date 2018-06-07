import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor(private builtInAngularHTTPClient:HttpClient) { }

  public getAvailableQuestionTypes() {

    // make a call to http://modern-js.azurewebsites.net/api/GetQuestionTypes?name=foo to get data

    return this.builtInAngularHTTPClient.get<string[]>("https://modern-js.azurewebsites.net/api/GetQuestionTypes?name=Magic");
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
        succeed : resolve(42) : reject("Failed")
      }
    );
    return p ;
  }
}
