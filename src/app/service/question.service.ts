import { Injectable } from '@angular/core';
import {Dropdown} from "../dynamic-form/questionTypes/dropdown";
import {Textbox} from "../dynamic-form/questionTypes/textbox";
import {of} from "rxjs";
import {QuestionBase} from "../dynamic-form/questionTypes/question-base";
import {ControlType} from "../dynamic-form/questionTypes/control-type";
import {RadioButtonsQuestion} from "../dynamic-form/questionTypes/radio-buttons-question";

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor() { }

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new RadioButtonsQuestion({
        controlType: ControlType.RADIO,
        key: 'assignment',
        label: 'How was the assignment?',
        options: [
          {key: 'Easy', value: 'easy'},
          {key: 'Normal', value: 'normal'},
          {key: 'Hard', value: 'hard'},
        ],
        required: true,
        order: 3,
        freeText: {key: 'other', value: 'Other'}
      }),
      new RadioButtonsQuestion({
        controlType: ControlType.RADIO,
        key: 'language',

        label: 'What language is your favorite?',
        options: [
          {key: 'JavaScript', value: 'js'},
          {key: 'TypeScript', value: 'ts'},
          {key: 'CoffeeScript', value: 'cs'}
        ],
        required: true,
        order: 1,
      }),

      new Dropdown({
        controlType: ControlType.DROPDOWN,
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 4
      }),

      new Textbox({
        controlType: ControlType.TEXT_BOX,
        key: 'firstName',
        label: 'What do you like about programming?',
        required: true,
        order: 2
      }),

    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
