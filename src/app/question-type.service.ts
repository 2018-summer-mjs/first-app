import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuestionTypeService {

  constructor(private builtInAngularHttpClient: HttpClient) { }

  public getAvailableQuestionTypes() {
    
    return this.builtInAngularHttpClient.get<string[]>("https://modern-js.azurewebsites.net/api/GetQuestionTypes?name=Magic%20Question");
  }

  public getAvailableQuestionTypeCount(succeed: boolean): Promise<number> {

    let p = new Promise<number>(
      (resolve, reject) => {
        succeed ? resolve(42) : reject("failed");
      }
    );

    return p;
  }
}
