import { useState } from "react";
import { FormBack, FormNext } from "./buttons";
import {TbExternalLink} from "react-icons/tb";
import MarkdownView from 'react-showdown';
import { ITextInput1 } from "../../types";
import { BsExclamationTriangleFill, BsFillCheckCircleFill } from "react-icons/bs";
import formImages from "./formImages";

// used to monitor error visibility
let showError = false;

const TextInput = (props: ITextInput1) => {
  const {title, value, name, last, index, setFocus, description, error, onChange, first, placeholder, register, required} = props;
  let {image, focus} = props;
  const showBtns = focus;
  focus = focus || !!error || !!value;
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const valid = error || !value ? false : true
  showError = (showError || !inputFocus) && !!error;

  Object.entries(formImages).forEach( ([key, _image]) => {
    if(name.toLowerCase().includes(key)){
      image = _image;
    }
  })
  
  return <div 
    id={name}
    onClick={(e) => setFocus(index,true)}
    className={`w-full md:px-[40px] px-[20px] rounded-[10px] cursor-pointer ${(focus ) && " py-[20px] bg-white dark:bg-blue-400"} 
    shadow-[0px_9px_16px_rgba(171,190,209,0.03)] dark:shadow-[0px_8px_16px_3px_#030324]`}>
    <div className={`font-semibold mb-[8px] flex items-center text-lg 
      ${focus ? "text-blue-400 dark:text-white" : "text-grey-300"}`}>
      {title} {required ? "*" : ""}
    </div> 

    <div className={`text-grey-300 text-sm font-normal ${focus && "description-link"}`}><MarkdownView markdown={description} /></div>
    <div className="mt-[20px]">
    { (focus) && 
      <div className="mb-[20px]">
      <div className={`${showError ? "border border-red-150" : ""} ${valid && !inputFocus ? "border border-green-100" : ""}
        relative flex w-full items-center px-[8px] py-[15px] bg-white dark:bg-black-200 rounded-md 
        shadow-[inset_0px_1px_2px_rgba(11,18,15,0.2)] dark:shadow-[inset_0px_1px_2px_rgba(231,231,255,0.2)]`}>
        <>{image && image("text-lg text-blue-400 dark:text-white")}</>
        <input 
          className={`${image && "ml-[7px]"} autofill-none placeholder:text-grey-400 placeholder:dark:text-grey-450 w-full text-sm font-normal bg-transparent outline-none z-[2]`}
          type="text"
          onFocus={() => setInputFocus(true)}
          value={value}
          placeholder={placeholder}
          {...register(props.name, {
            onChange: (e) => {onChange(e.currentTarget.value); showError = false},
            onBlur: () => {setInputFocus(false); showError = true}
          })}
        />
        {showError && <BsExclamationTriangleFill className="text-lg text-red-150" />}
        {valid && !inputFocus && <BsFillCheckCircleFill className="text-lg text-green-100" />}
      </div>
        {showError && <span className="text-red-150 mt-[8px] inline-block break-all	">
          *{error?.replace(name, title)
            .replace("is a required field", "is required")
            .replace( /the following:.*/ , placeholder)}
          </span>
        }
      </div>
    }
      {showBtns && <div className="h-[48px] gap-5 md:gap-14 flex justify-between">
        {!first && <div className={`h-full ${last ? "w-full" : "w-[100px] max-w-[240px]"} md:w-full `}><FormBack onClick={() => setFocus(index-1, true)} active={true} /> </div>}
        {!last && <div className={`h-full ${first ? "w-full" : "w-[156px] max-w-[500px]"}  md:w-full`}><FormNext active={inputFocus || valid} onClick={() => {(valid || !required) && setFocus(index+1, true)}} /></div>}
        </div>
      }
    </div>
  </div>
}

export default TextInput;
