import { ReactElement, useState } from "react";
import { FormBack, FormNext } from "./buttons";
import {TbExternalLink} from "react-icons/tb";
import Link from "next/link";
import { ITextInput1 } from "../../types";
import { RiContactsBookLine } from "react-icons/ri";



const TextInput = (props: ITextInput1) => {
  const {title, value, focus, name, last, index, setFocus, description, valid, image, onChange, first, placeholder, titleLink, register} = props;
  const [inputFocus, setInputFocus] = useState<boolean>();
  // console.log(last, name, "textInput");

  return <div 
    onClick={(e) => setFocus(index,true)}
    className={`w-[342px] px-[21px] rounded-[10px] py-[21px] ${(value || focus) && "bg-blue-400"} shadow-[0px_8px_16px_3px_#030324]`}>
    {
      !titleLink ?
      <p className={`font-semibold flex items-center text-lg text-white`}>
        {title}
      </p> :
      <div className={`"underline cursor-pointer max-w-max font-semibold flex items-center text-lg text-white`}>
        <Link href={titleLink}>
          <><span className="underline">{title}</span> <TbExternalLink className="text-[22px] inline-block ml-[4px]" /></>
        </Link>
      </div>
    }
    <p className="text-grey-300 text-sm font-normal">{description}</p>
    { (value || focus) && <div className="relative mt-[17px] flex w-full items-center px-[8px] py-[15px] bg-black-200 rounded-md shadow-[inset_0px_1px_2px_rgba(231,231,255,0.2)]">
      <span className={`text-grey-450 transition-all duration-300 absolute z-[1] ${ image ? "left-[33px]" : "left-[7px]"} ${(inputFocus || value) && "-translate-y-[15px] text-[10px]"}`}>{placeholder}</span>
      <>{image && image("text-lg")}</>
      <input 
        className={`${image && "ml-[7px]"} w-full text-sm font-normal bg-transparent outline-none z-[2]`}
        type="text"
        onFocus={() => setInputFocus(true)}
        value={value}
        {...register(props.name, {
          onChange: (e) => onChange(e.currentTarget.value),
          onBlur: () => setInputFocus(false)
        })}
      />
    </div>}
    {focus && <div className="h-[48px] mt-[20px] flex justify-between">
      {!first && <div className={`h-full ${last ? "w-full" : "w-[100px]"}`}><FormBack onClick={() => setFocus(index-1, true)} active={true} /> </div>}
      {!last && <div className={`h-full ${first ? "w-full" : "w-[156px]"}`}><FormNext active={valid} onClick={() => setFocus(index+1, true)} /></div>}
    </div>
    }
  </div>
}

export default TextInput;
