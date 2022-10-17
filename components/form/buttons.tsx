import { SyntheticEvent } from "react";

interface IButton {
  text: string,
  className?: string,
  submit?: boolean
  onClick: () => void
}

interface FormButton {
  active: boolean,
  onClick: () => void
}


const Button = ({text, className, submit, onClick}: IButton) => {
  const classNames = `${className} rounded-md  cursor-pointer`;
  return  <button 
    type={`${submit ? "submit" : "button"}`} 
    className={classNames} onClick={(e: SyntheticEvent) => {e.stopPropagation(); onClick()}}>
      {text}
    </button> 
}

export const Submit = ({active, onClick}: FormButton) => {
  return <Button 
    text="Submit"
    onClick={onClick}
    submit
    className={`
      ${active ? "bg-green-100 text-white" : "cursor-default bg-grey-150 text-grey-250"}
      h-[48px] text-md font-medium w-full
    `} />
}

export const FormNext = ({active, onClick}: FormButton) => {

  return <Button 
    text="Next" 
    onClick={() => onClick()}
    className={`
      ${active ? "bg-green-100 text-white" : "cursor-default bg-grey-150 text-grey-250"}
      w-full h-full text-md font-medium
    `} />
}

export const FormBack = ({active, onClick}: FormButton) => {
  return <Button 
    text="Back" 
    onClick={onClick}
    className={`
      ${"bg-grey-350 text-grey-250"}
      w-full h-full text-md font-medium
    `} />
}

export const FormSubmit = () => {

}