import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {QuestionBase} from "../questionTypes/question-base";
import {ControlType} from "../questionTypes/control-type";

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
  controlType = ControlType;
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit(): void {
  }
}
