import {QuestionBase, QuestionBaseOptions} from "./question-base";
import {ControlType} from "./control-type";

export class RadioButtonsQuestion extends QuestionBase<string>{
  override controlType = ControlType.RADIO;
}


