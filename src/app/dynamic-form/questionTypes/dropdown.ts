import {ControlType} from "./control-type";
import {QuestionBase} from "./question-base";

export class Dropdown extends QuestionBase<string>{
  override controlType = ControlType.DROPDOWN;
}
