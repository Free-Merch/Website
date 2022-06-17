import { Children } from "react"

interface IButton {
  children: string,
  className?: string
}

export const GreenButton = ({children, className}: IButton) => 
  <button className={`bg-green-100 border-1px border-green-100 text-white py-4 px-8 rounded-md ${className}`}>
    {children}
  </button>


export const GreenBorderButton = ({children, className}: IButton) => 
  <button className={`bg-transparent border-green-100 border-1px text-white py-4 px-8 rounded-md ${className}`}>
    {children}
  </button>
