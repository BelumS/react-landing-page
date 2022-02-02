import React from 'react';
import { ButtonProps } from '../../../common/PropTypes';

const ButtonWithRef = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>((props, ref) => {
  return <button type={props.type} className={props.styles} ref={ref} onClick={props.onClick}>{props.children}</button>;
});

export default ButtonWithRef;
