import { FunctionComponent } from 'react';
import { StyleProp } from '../../common/PropTypes';

export const SubmitButton: FunctionComponent<StyleProp> = (props) => {
    return <button type="submit" className={props.styles}>{props.children}</button>;
};

export default SubmitButton;
