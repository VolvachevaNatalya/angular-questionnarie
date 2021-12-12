import {QuestionBase} from "../dynamic-form/questionTypes/question-base";

export interface Questionnaire {
  id: number,
  questions: QuestionBase<any>[]
}
