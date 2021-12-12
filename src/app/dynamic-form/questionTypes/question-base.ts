export interface QuestionBaseOptions<T> {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  inputType?: string;
  options?: {key: string, value: string}[];
  freeText?: {key: string};
}

export class QuestionBase<T> {
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  inputType: string;
  options: {key: string, value: string}[];
  freeText?: {key: string};

  constructor(options: QuestionBaseOptions<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.inputType = options.inputType || '';
    this.options = options.options || [];
    this.freeText = options.freeText || undefined;
  }
}
