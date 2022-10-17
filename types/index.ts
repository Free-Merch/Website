import { FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";


export type ThemeType = "light"|"dark";

export interface ImageType {
  url: string,
  name: string,
  alternativeText: string,
  ratio: number,
  height: number,
  width: number
}

export interface Item {
  name: string,
  quantity: number,
  shared: number,
  image: ImageType,
  requestLink: string
}

export interface BrandBrief {
  id: number
  brand: string,
  about: string,
  logoBgColor: string,
  logo: ImageType,
  campaigns: ImageType[]
}

export interface Brand {
  name: string,
  description: string,
  logoBgColor: string,
  links: {[key: string]: string}
  logo: ImageType,
  id: number,
}

export interface Campaign {
  name: string
  brand: Brand
  active: boolean
  identifier: string
  description: string
  merchandise: ImageType[]
  id: number
}

export interface Campaign_Q extends Campaign {
  questions: Question[]
}

export interface FAQ {
  question: string,
  answer: any
}

interface IInput {
  title: string
  description: string,
  name: string,
  validation: string,
  required: boolean
  titleLink?: string,
  index: number
}

export enum TQuestion {
  TEXT = "TEXT",
  RADIO = "RADIO",
  IMAGE = "IMAGE"
}

export interface ITextInput extends IInput {
  placeholder: string,
  validation: string,
  image?: (className:string) => JSX.Element,
  first?: boolean
  last?: boolean
  type: TQuestion.TEXT
}

export interface ITextInput1 extends ITextInput {
    value: string;
    error: string|undefined;
    focus: boolean;
    register: UseFormRegister<FieldValues>,
    setFocus: (index:number, focus: boolean) => void
    index: number
    onChange: (value:string) => void
}

export interface IImageInput extends IInput {
  first?: boolean,
  last?: boolean
  sample: ImageType,
  type: TQuestion.IMAGE,
}

export interface IImageInput1 extends IImageInput {
    index: number;
    setFocus: (index:number, focus: boolean) => void;
    register: UseFormRegister<FieldValues>,
    focus: boolean;
    value: string;
    onChange: (value:string) => void
}

export interface IRadioInput extends IInput {
  radioTexts: string[],
  first?: boolean,
  last?: boolean
  type: TQuestion.RADIO,
}

export interface IRadioInput1 extends IRadioInput {
  value: string;
  onChange: (value:string) => void
  focus: boolean;
  register: UseFormRegister<FieldValues>,
  setFocus: (index:number, focus: boolean) => void
  index: number
}

export interface TQuestionInput {
  "TEXT": ITextInput,
  "RADIO": IRadioInput,
  "IMAGE": IImageInput
}

export type Question = IRadioInput | IImageInput | ITextInput;
