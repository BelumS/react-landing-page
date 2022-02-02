import React from 'react';
import { StyleProp } from '../../../common/Types';
import { InputEvent } from '../../../common/Types';

interface InputWithRefProps extends StyleProp {
  inputType: string,
  placeholderText: string,
  onClick: () => void,
  onChange: (e: InputEvent) => void;
}

const InputWithRef = React.forwardRef<HTMLInputElement, React.PropsWithChildren<InputWithRefProps>>((props, ref) => {
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

