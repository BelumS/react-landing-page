import { InputEvent } from './EventTypes';

export interface StyleProp {
  styles: string;
}

export interface IconProps extends StyleProp {
  onClick: () => void;
}

export interface InputProps extends StyleProp {
  inputType: string;
  placeholderText: string;
  onClick: () => void;
  onChange: (e: InputEvent) => void;
}

export interface ButtonProps extends StyleProp {
  type: any;
  onClick: () => void;
}
