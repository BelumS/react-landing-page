import React from 'react';
import { IconProps } from '../../../common/PropTypes';

const IconWithRef = React.forwardRef<HTMLElement, React.PropsWithChildren<IconProps>>(
    (props, ref) => {
      return <i ref={ref} className={props.styles} onClick={props.onClick}></i>;
    }
  );

export default IconWithRef;
