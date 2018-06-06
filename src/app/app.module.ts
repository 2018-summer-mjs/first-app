import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChooseQuestionTypeComponentComponent } from './choose-question-type-component/choose-question-type-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseQuestionTypeComponentComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
