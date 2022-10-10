import Link from "next/link";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { IRadioInput, IRadioInput1 } from "../../types";
import { FormBack, FormNext } from "./buttons";


const RadioInput = (props: IRadioInput1) => {
  const {title, description, first, radioTexts, setFocus, index, last, titleLink} = props;
  // const [focus, setFocus] = useState<boolean>();
  const [value, setValue] = useState<string>("")

  return <div 
    className="w-[342px] px-[21px] rounded-[10px] py-[21px] bg-blue-400 shadow-[0px_8px_16px_3px_#030324]">
    {
      !titleLink ?
      <p className={`font-semibold flex items-center text-lg text-white`}>
        {title}
      </p> :
      <Link href={titleLink} className={`"underline font-semibold flex items-center text-lg text-white`}>
        <div className={`"underline font-semibold flex items-center text-lg text-white`}>
          <span className="underline">{title}</span> <TbExternalLink className="text-[22px] inline-block ml-[4px]" />
        </div>
      </Link>
    }
    <p className="text-grey-300 text-sm font-normal">{description}</p>
    <div className="relative mt-[17px] mb-[20px] gap-4 flex w-full items-center px-[8px] py-[15px] justify-center">
      {radioTexts.map((text, index) => 
        <div key={index} className="flex gap-1 items-center text-[#ffffff80]">
          <label 
            htmlFor={text} 
            className={
              `inline-block w-[17px] h-[17px] border rounded-full
              ${value === text ? "bg-green-100" : ""}`
            } 
          />
          {text}
          <input onClick={e => setValue(e.currentTarget.value)} id={text} className="opacity-0 h-0 w-0" type={"radio"} value={text} />
        </div>
      )}
    </div>
    <div className="h-[48px] flex justify-between">
      {!first && <div className={`h-full ${last ? "w-full" : "w-[100px]"}`}><FormBack onClick={() => setFocus(index-1, true)} active={true} /> </div>}
      {!last && <div className={`h-full ${first ? "w-full" : "w-[156px]"}`}><FormNext onClick={() => setFocus(index+1, true)} active={value ? true : false} /></div>}
    </div>
  </div>
}

export default RadioInput;
