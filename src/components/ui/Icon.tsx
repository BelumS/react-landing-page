import { FunctionComponent } from 'react';
import { StyleProp } from '../../common/Types';

interface IconProps extends StyleProp {
  onClick: () => void;
}

const Icon: FunctionComponent<IconProps> = props => { return <i className={props.styles} onClick={props.onClick}></i>; };

export default Icon;
