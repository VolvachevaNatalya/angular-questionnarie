import {QuestionBase} from "./question-base";
import {ControlType} from "./control-type";

export class Textbox extends QuestionBase<string>{
  override controlType = ControlType.TEXT_BOX;
}
