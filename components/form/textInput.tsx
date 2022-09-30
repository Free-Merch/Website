import { ReactElement, useState } from "react";
import { FormBack, FormNext } from "./buttons";

interface ITextInput {
  title: string,
  description: string,
  placeholder: string,
  image: (className:string) => JSX.Element,
  first: boolean
}

const TextInput = (props: ITextInput) => {
  const {title, description, image, first, placeholder} = props;
  const [focus, setFocus] = useState<boolean>();

  return <div 
    className="w-[342px] px-[21px] rounded-[10px] py-[21px] bg-blue-400 shadow-[0px_8px_16px_3px_#030324]">
    <p className="font-semibold text-lg text-white">{title}</p>
    <p className="text-grey-300 text-sm font-normal">{description}</p>
    <div className="relative mt-[17px] mb-[20px] flex w-full items-center px-[8px] py-[15px] bg-black-200 rounded-md shadow-[inset_0px_1px_2px_rgba(231,231,255,0.2)]">
      <span className={`text-grey-450 transition-all duration-300 absolute z-[1] left-[33px] ${focus && "-translate-y-[15px] text-[10px]"}`}>{placeholder}</span>
      <>{image("text-lg")}</>
      <input 
        className="ml-[7px] w-full text-sm font-normal bg-transparent outline-none z-[2]"
        type="text" 
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
    <div className="h-[48px] flex justify-between">
      {!first && <div className="h-full w-[100px]"><FormBack active={false} /> </div>}
      <div className={`h-full ${first ? "w-full" : "w-[156px]"}`}><FormNext active={focus ?? false} /></div>
    </div>
  </div>
}

export default TextInput;
