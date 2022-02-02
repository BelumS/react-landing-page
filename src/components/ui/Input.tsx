import { FunctionComponent } from 'react';
import { InputEvent, StyleProp } from '../../common/Types';

interface InputProps extends StyleProp {
  inputType: string,
  placeholderText: string,
  onClick: () => void,
  onChange: (e: InputEvent) => void;
}

export const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <input
      className={props.styles}
      type={props.inputType}
      placeholder={props.placeholderText}
      onClick={props.onClick}
      onChange={props.onChange}
    />
  );
};

export default Input;