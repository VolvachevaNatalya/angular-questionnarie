import {Component, OnInit} from '@angular/core';
import {QuestionService} from "./service/question.service";
import {Observable, tap} from "rxjs";
import {QuestionBase} from "./dynamic-form/questionTypes/question-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:  [QuestionService]

})
export class AppComponent implements OnInit {
  title = 'GoTech';
  questions$: Observable<QuestionBase<any>[]> | undefined;

  constructor(private service: QuestionService) {
    this.questions$ = this.service.getQuestions(1);
  }

  ngOnInit(): void {

  }


}
