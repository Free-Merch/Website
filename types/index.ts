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