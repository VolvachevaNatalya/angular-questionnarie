import { Component } from '@angular/core';
import {QuestionService} from "./service/question.service";
import {Observable} from "rxjs";
import {QuestionBase} from "./dynamic-form/questionTypes/question-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:  [QuestionService]

})
export class AppComponent {
  title = 'GoTech';
  questions$: Observable<QuestionBase<any>[]> | undefined;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

}
