import { TbExternalLink } from "react-icons/tb";
import { IRadioInput1 } from "../../types";
import { FormBack, FormNext } from "./buttons";
import MarkdownView from 'react-showdown';

const RadioInput = (props: IRadioInput1) => {
  const {title, description, value, first, register, radioTexts, onChange, setFocus, focus, index, last, titleLink} = props;
  // const [focus, setFocus] = useState<boolean>();
  const clear = () => {
    onChange("")
  }

  return <div 
    onClick={() => setFocus(index, true)}
    className={`${(focus || value) && "bg-white dark:bg-blue-400 md:py-[24px] py-[20px]"} cursor-pointer w-full px-[21px] md:px-[40px] rounded-[10px] 
      shadow-[0px_9px_16px_rgba(171,190,209,0.03)] dark:shadow-[0px_8px_16px_3px_#030324]`}>

    <div className={` font-semibold flex items-center text-lg 
      ${focus ? "text-blue-400 dark:text-white" : "text-grey-300"}`}>
      {title}
    </div>
    <div className={`${focus && "description-link"} text-grey-300 mt-[8px] text-sm font-normal`}><MarkdownView markdown={description} /></div>
    <div className="relative my-[20px] gap-4 flex flex-wrap w-full items-center justify-left">
      {radioTexts.map((text, index) => 
        <div key={index} className="flex gap-1 items-center text-grey-300 dark:text-[#ffffff80]">
          <label 
            htmlFor={text} 
            className="flex items-center cursor-pointer"
            onClick={() => onChange(text)}
          >
          <div className={
              `inline-block w-[17px] mr-1 h-[17px] border rounded-full ${focus ? "border-blue-400 dark:border-white" : "dark:border-grey-300"} 
              ${value === text ? "bg-green-100" : ""}`
            } />
          {text}
          </label>
          <input {...register(props.name)} id={text} className="opacity-0 h-0 w-0" type={"radio"} value={text} />
        </div>
      )}
    </div>
    {value && <div onClick={clear} className="mb-[20px] dark:text-grey-300 text-grey-450"> Clear selection</div>}
    {focus && 
      <div className="h-[48px] md:gap-14 flex justify-between mt-[24px]">
        {!first && <div className={`h-full ${last ? "w-full" : "w-[100px]  max-w-[240px]"} md:w-full]`}><FormBack onClick={() => setFocus(index-1, true)} active={false} /> </div>}
        {!last && <div className={`h-full ${first ? "w-full" : "w-[156px] max-w-[500px]"} md:w-full`}><FormNext onClick={() => {value && setFocus(index+1, true)}} active={value ? true : false} /></div>}
      </div>
    }
  </div>
}

export default RadioInput;
