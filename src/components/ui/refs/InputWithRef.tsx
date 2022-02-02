import React from 'react';
import { InputProps } from '../../../common/PropTypes';

const InputWithRef = React.forwardRef<HTMLInputElement, React.PropsWithChildren<InputProps>>((props, ref) => {
  return (
    // TODO: Wrap with CSSTransition
    <input
      className={props.styles}
      type={props.inputType}
      placeholder={props.placeholderText}
      ref={ref}
      onClick={props.onClick}
      onChange={props.onChange}
    />
  );
});

export default InputWithRef;

