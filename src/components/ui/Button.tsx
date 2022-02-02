import React, { FunctionComponent } from 'react';
import { StyleProp } from '../../common/Types';

interface ButtonProps extends StyleProp {
  type: any, 
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return <button type={props.type} className={props.styles} onClick={props.onClick}>{props.children}</button>;
};

export default Button;

