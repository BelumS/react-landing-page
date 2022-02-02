import { ChangeEvent, FormEvent } from "react";

export type SubmitEvent = FormEvent<HTMLFormElement>;
export type InputEvent = ChangeEvent<HTMLInputElement>;

export interface StyleProp {
    styles: string;
};