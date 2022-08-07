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
}

export interface ProjectBrief {
  id: number
  brand: string,
  about: string,
  logoBgColor: string,
  logo: ImageType,
  campaigns: ImageType[]
}

export interface Project {
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
  active: boolean
}

export interface Link{
  url: string
  name: string
}