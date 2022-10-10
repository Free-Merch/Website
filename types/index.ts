import { FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import ISchema from "./schema";


export type ThemeType = "light"|"dark";
export {
  ISchema
};

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
  id: number
  brand: string,
  about: string,
  logoBgColor: string,
  links: Link[]
  logo: ImageType,
  campaignImages: ImageType[]
  campaigns: Campaign[]
}

export interface Campaign {
  items: Item[]
  name: string
  active: boolean
}

export interface Link{
  url: string
  name: string
}

export interface FAQ {
  question: string,
  answer: any
}

export interface ITextInput {
  title: string,
  description: string,
  placeholder: string,
  name: string,
  required: boolean,
  validation: string,
  image?: (className:string) => JSX.Element,
  first?: boolean
    last?: boolean
  titleLink?: string
}

export interface ITextInput1 extends ITextInput {
    value: string;
    valid: boolean;
    focus: boolean;
    register: UseFormRegister<FieldValues>,
    setFocus: (index:number, focus: boolean) => void
    index: number
    onChange: (value:string) => void
}

export interface IImageInput {
  title: string,
  description: string,
  name: string,
  first?: boolean,
  last?: boolean
  sample: string,
  validation: string,
  titleLink?: string
}

export interface IImageInput1 extends IImageInput {
    value: string;
    valid: boolean;
    onChange: (value:string) => void
}

export interface IRadioInput {
  title: string,
  description: string,
  name: string,
  radioTexts: string[],
  validation: string,
  titleLink?: string
  first?: boolean,
  last?: boolean
}

export interface IRadioInput1 extends IRadioInput {
    value: string;
    valid: boolean;
    onChange: (value:string) => void
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
