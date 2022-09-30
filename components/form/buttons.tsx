
interface IButton {
  text: string,
  className?: string
}

interface FormButton {
  active: boolean
}


const Button = ({text, className}: IButton) => {
  const classNames = `${className} rounded-md  cursor-pointer`;
  return  <button className={classNames}>
      {text}
    </button> 
}

export const FormNext = ({active}: FormButton) => {
  return <Button 
    text="Next" 
    className={`
      ${active ? "bg-green-100 text-white" : "bg-grey-150 text-grey-250"}
      w-full h-full text-md font-medium
    `} />
}

export const FormBack = ({active}: FormButton) => {
  return <Button 
    text="Back" 
    className={`
      ${active ? "bg-green-100 text-white" : "bg-grey-350 text-grey-250"}
      w-full h-full text-md font-medium
    `} />
}

export const FormSubmit = () => {

}