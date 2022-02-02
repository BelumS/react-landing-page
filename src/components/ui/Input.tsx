import { FunctionComponent } from 'react';
import { InputProps } from '../../common/PropTypes';

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