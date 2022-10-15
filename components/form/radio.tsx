import Link from "next/link";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { IRadioInput, IRadioInput1 } from "../../types";
import { FormBack, FormNext } from "./buttons";


const RadioInput = (props: IRadioInput1) => {
  const {title, description, value, first, register, radioTexts, onChange, setFocus, focus, index, last, titleLink} = props;
  // const [focus, setFocus] = useState<boolean>();

  return <div 
    onClick={() => setFocus(index, true)}
    className={`${(focus || value) && "bg-white dark:bg-blue-400 py-[21px]"} cursor-pointer w-full px-[21px] rounded-[10px] 
      shadow-[0px_9px_16px_rgba(171,190,209,0.03)] dark:shadow-[0px_8px_16px_3px_#030324]`}>
    {
      !titleLink ?
      <p className={`font-semibold flex items-center text-lg dark:text-white text-blue-400`}>
        {title}
      </p> :
      <Link href={titleLink} target="_blank" className={`"underline font-semibold flex items-center text-lg text-white`}>
        <div className={`"underline font-semibold flex items-center text-lg text-white`}>
          <span className="underline">{title}</span> <TbExternalLink className="text-[22px] inline-block ml-[4px]" />
        </div>
      </Link>
    }
    <p className="text-grey-300 text-sm font-normal">{description}</p>
    <div className="relative mt-[17px] mb-[20px] gap-4 flex flex-wrap w-full items-center px-[8px] py-[15px] justify-left">
      {radioTexts.map((text, index) => 
        <div key={index} className="flex gap-1 items-center text-[#ffffff80]">
          <label 
            htmlFor={text} 
            className="flex items-center cursor-pointer"
          >
          <div className={
              `inline-block w-[17px] mr-1 h-[17px] border rounded-full border-white
              ${value === text ? "bg-green-100" : ""}`
            } />
          {text}
          </label>
          <input {...register(props.name, {onChange:e => onChange(e.currentTarget.value)})} id={text} className="opacity-0 h-0 w-0" type={"radio"} value={text} />
        </div>
      )}
    </div>
    {focus && 
      <div className="h-[48px] md:gap-14 flex justify-between mt-[24px]">
        {!first && <div className={`h-full ${last ? "w-full" : "w-[100px]"} md:w-full max-w-[240px]`}><FormBack onClick={() => setFocus(index-1, true)} active={false} /> </div>}
        {!last && <div className={`h-full ${first ? "w-full" : "w-[156px]"} md:w-full`}><FormNext onClick={() => {value && setFocus(index+1, true)}} active={value ? true : false} /></div>}
      </div>
    }
  </div>
}

export default RadioInput;
