import Link from "next/link";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { FormBack, FormNext } from "./buttons";

interface IRadioInput {
  title: string,
  description: string,
  radioTexts: string[],
  first?: boolean
  titleLink?: string
}

const RadioInput = (props: IRadioInput) => {
  const {title, description, first, radioTexts, titleLink} = props;
  const [focus, setFocus] = useState<boolean>();
  const [value, setValue] = useState<string>("")

  return <div 
    className="w-[342px] px-[21px] rounded-[10px] py-[21px] bg-blue-400 shadow-[0px_8px_16px_3px_#030324]">
    {
      !titleLink ?
      <p className={`font-semibold flex items-center text-lg text-white`}>
        {title}
      </p> :
      <Link href={titleLink} className={`"underline font-semibold flex items-center text-lg text-white`}>
        {title} <TbExternalLink className="text-[22px] inline-block ml-[4px]" />
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
      {!first && <div className="h-full w-[100px]"><FormBack active={false} /> </div>}
      <div className={`h-full ${first ? "w-full" : "w-[156px]"}`}><FormNext active={focus ?? false} /></div>
    </div>
  </div>
}

export default RadioInput;
