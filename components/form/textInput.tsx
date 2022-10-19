import { useState } from "react";
import { FormBack, FormNext } from "./buttons";
import {TbExternalLink} from "react-icons/tb";
import MarkdownView from 'react-showdown';
import { ITextInput1 } from "../../types";
import { BsExclamationTriangleFill, BsFillCheckCircleFill } from "react-icons/bs";
import formImages from "./formImages";


const TextInput = (props: ITextInput1) => {
  const {title, value, focus, name, last, index, setFocus, description, error, onChange, first, placeholder, titleLink, register} = props;
  let {image} = props;
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const valid = error || !value ? false : true

  Object.entries(formImages).forEach( ([key, _image]) => {
    if(name.toLowerCase().includes(key)){
      image = _image;
    }
  })
  
  return <div 
    onClick={(e) => setFocus(index,true)}
    className={`w-full px-[40px] md:px-[20px] rounded-[10px] cursor-pointer ${(value || focus) && "py-[24px] md:py-[20px] bg-white dark:bg-blue-400"} 
    shadow-[0px_9px_16px_rgba(171,190,209,0.03)] dark:shadow-[0px_8px_16px_3px_#030324]`}>
    {
      !titleLink ?
      <p className={`font-semibold flex items-center text-lg text-blue-400 dark:text-white`}>
        {title}
      </p> :
      <div className={`"underline cursor-pointer max-w-max font-semibold flex items-center text-lg text-blue-400 dark:text-white`}>
        <a rel="noreferrer" target="_blank" href={titleLink}>
          <span><span className="underline">{title}</span> <TbExternalLink className="text-[22px] inline-block ml-[2px]" /></span>
        </a>
      </div>
    }

    <div className="text-grey-300 text-sm font-normal"><MarkdownView markdown={description} /></div>

    { (value || focus) && 
      <div className={`${error && !inputFocus ? "border border-red-150" : ""} ${valid && !inputFocus ? "border border-green-100" : ""}
        relative mt-[17px] flex w-full items-center px-[8px] py-[15px] bg-white dark:bg-black-200 rounded-md 
        shadow-[inset_0px_1px_2px_rgba(11,18,15,0.2)] dark:shadow-[inset_0px_1px_2px_rgba(231,231,255,0.2)]`}>
        <>{image && image("text-lg text-blue-400 dark:text-white")}</>
        <input 
          className={`${image && "ml-[7px]"} placeholder:text-grey-400 placeholder:dark:text-grey-450 w-full text-sm font-normal bg-transparent outline-none z-[2]`}
          type="text"
          onFocus={() => setInputFocus(true)}
          value={value}
          placeholder={placeholder}
          {...register(props.name, {
            onChange: (e) => onChange(e.currentTarget.value),
            onBlur: () => setInputFocus(false)
          })}
        />
        {error && !inputFocus && <BsExclamationTriangleFill className="text-lg text-red-150" />}
        {valid && !inputFocus && <BsFillCheckCircleFill className="text-lg text-green-100" />}
      </div>
    }
    {error && !inputFocus && <span className="text-red-150 inline-block mt-[8px]">*{error.replace( /the following:.*/ , placeholder)}</span>}
    {focus && <div className="h-[48px] mt-[20px] gap-5 md:gap-14 flex justify-between">
      {!first && <div className={`h-full ${last ? "w-full" : "w-[100px] max-w-[240px]"} md:w-full `}><FormBack onClick={() => setFocus(index-1, true)} active={true} /> </div>}
      {!last && <div className={`h-full ${first ? "w-full" : "w-[156px] max-w-[500px]"}  md:w-full`}><FormNext active={inputFocus || valid} onClick={() => {valid && setFocus(index+1, true)}} /></div>}
    </div>
    }
  </div>
}

export default TextInput;
