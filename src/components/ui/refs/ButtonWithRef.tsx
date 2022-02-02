import React from 'react';
import { StyleProp } from '../../../common/Types';

interface ButtonWithRefProps extends StyleProp {
  type: any, 
  onClick: () => void;
}

const ButtonWithRef = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonWithRefProps>>((props, ref) => {
  return <button type={props.type} className={props.styles} ref={ref} onClick={props.onClick}>{props.children}</button>;
});

export default ButtonWithRef;
