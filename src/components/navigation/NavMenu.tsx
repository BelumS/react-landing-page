import { FunctionComponent } from 'react';

interface NavProps {
  styles: string
}

export const NavMenu: FunctionComponent<NavProps> = props => {
  return <nav className={props.styles}>{props.children}</nav>;
};
