import {Injectable} from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {QuestionBase} from "../dynamic-form/questionTypes/question-base";
import {HttpClient} from "@angular/common/http";
import {Questionnaire} from "../model/questionnaire";

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  getQuestions(questionnaireId: number) {
    return this.httpClient.get<Questionnaire>(`/questionnaires/${questionnaireId}`)
      .pipe(map(questionnaire => questionnaire.questions))
  }
}
