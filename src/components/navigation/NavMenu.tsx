import { FunctionComponent } from 'react';
import { StyleProp } from '../../common/PropTypes';

export const NavMenu: FunctionComponent<StyleProp> = props => {
  return <nav className={props.styles}>{props.children}</nav>;
};