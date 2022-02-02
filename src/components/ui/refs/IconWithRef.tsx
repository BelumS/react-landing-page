import React from 'react';
import { StyleProp } from '../../../common/Types';

interface IconWithRefProps extends StyleProp {
  onClick: () => void;
}

const IconWithRef = React.forwardRef<HTMLElement, React.PropsWithChildren<IconWithRefProps>>(
    (props, ref) => {
     /* TODO: Wrap with CSSTransition */
      return <i ref={ref} className={props.styles} onClick={props.onClick}></i>;
    }
  );

export default IconWithRef;
