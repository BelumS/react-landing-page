import React, { FunctionComponent } from 'react';
import { ButtonProps } from '../../common/PropTypes';

const Button: FunctionComponent<ButtonProps> = (props) => {
  return <button type={props.type} className={props.styles} onClick={props.onClick}>{props.children}</button>;
};

export default Button;

