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
  links: Link[]
  logo: ImageType,
}

export interface Campaign {
  name: string
  brand: string
  active: boolean
  identifier: string
  description: string
  merchandise: ImageType[]
  id: number
}

export interface Link{
  url: string
  name: string
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

export interface ITextInput extends IInput {
  placeholder: string,
  validation: string,
  image?: (className:string) => JSX.Element,
  first?: boolean
  last?: boolean
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
  sample: string,
}

export interface IImageInput1 extends IImageInput {
    index: number;
    setFocus: (index:number, focus: boolean) => void;
    register: UseFormRegister<FieldValues>,
    error: string|undefined;
    focus: boolean;
    value: string;
    onChange: (value:File|undefined) => void
}

export interface IRadioInput extends IInput {
  radioTexts: string[],
  first?: boolean,
  last?: boolean
}

export interface IRadioInput1 extends IRadioInput {
    value: string;
    onChange: (value:string) => void
    focus: boolean;
    register: UseFormRegister<FieldValues>,
    setFocus: (index:number, focus: boolean) => void
    index: number
}

export enum TQuestion {
  EMAIL = "EMAIL",
  TEXT = "TEXT",
  RADIO = "RADIO",
  IMAGE = "IMAGE"
}

export type Question =  {type: TQuestion.RADIO } & IRadioInput | {type: TQuestion.IMAGE } & IImageInput 
  | {type: TQuestion.TEXT } & ITextInput;
