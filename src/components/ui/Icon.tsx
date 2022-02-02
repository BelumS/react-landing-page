import { FunctionComponent } from 'react';
import { IconProps } from '../../common/PropTypes';

const Icon: FunctionComponent<IconProps> = props => { return <i className={props.styles} onClick={props.onClick}></i>; };

export default Icon;
