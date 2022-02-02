import { FunctionComponent } from 'react';
import { StyleProp, SubmitEvent } from '../../common/Types';

interface FormProps extends StyleProp {
  action: string,
  inputValue: string,
  noValidateFlag: boolean,
  onSubmit: (e: SubmitEvent) => void;
}

const Form: FunctionComponent<FormProps> = (props) => {
  return (
    <form
      action={props.action}
      className={props.styles}
      onSubmit={props.onSubmit}
      noValidate={props.noValidateFlag}
      defaultValue={props.inputValue}
    >
      {props.children}
    </form>
  );
};

export default Form;