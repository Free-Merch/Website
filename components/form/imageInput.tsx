import Image from "next/image";
import { useEffect, useState } from "react";
import { FormBack, FormNext } from "./buttons";
import { MdDriveFolderUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {IImageInput1} from "../../types/index";
import { useModalContext } from "../../hooks/contexthooks";
import { FormClient } from "../../helpers/formClient";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import MarkdownView from 'react-showdown';

interface ExFile extends File {
  url?: string;
}
const fileTypes = ["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"];

const ImageInput = (props: IImageInput1) => {
  const {title, description, onChange, name, required, value, sample, first, last, setFocus, index} = props;
  const { show } = useModalContext();
  const [file, setFile] = useState<ExFile>();
  const [uploading, setUploading] = useState<Boolean>();
  const [error, setError] = useState<string>("")
  const _error = error || (!file && props.error?.replace(name, title)
      .replace("is a required field", "is required"))

  const showBtns = props.focus;
  const focus = props.focus || (error || _error);
  const uploadFile = async ({target}: {target: HTMLInputElement}) : Promise<void> => {
    if(target.files && target.files?.length !== 0) {
      const file: ExFile = target.files[0];
      if(!fileTypes.includes(file.type)){
        setError("This image type is not supported.")
        return;
      };
      file.url = URL.createObjectURL(file);
      setFile(file);
      if(file.size > 5242880){
        setError("Image size exceeds 5MB.")
        return;
      }

      setUploading(true);
      const {body: url, status} = await FormClient.uploadImage(file);
      if(status !== "success"){
        setUploading(false);
        setError("Uploading Failed.");
        return;
      }
      setError("");
      setUploading(false);
      onChange(url)
    }
  }


  return <div 
    onClick={() => setFocus(index, true)}
    className={`${focus || file ? " bg-white dark:bg-blue-400 md:py-[24px] py-[20px]" : ""} cursor-pointer w-full px-[20px] rounded-[10px] 
      shadow-[0px_9px_16px_rgba(171,190,209,0.03)] md:px-[40px] dark:shadow-[0px_8px_16px_3px_#030324]`}>
    <div className={`font-semibold flex items-center text-lg ${focus || value ? "text-blue-400 dark:text-white" : "text-grey-300"}`}>
      {title} {required ? "*" : ""}
    </div>
    
    <div className={`my-[8px] text-grey-300 text-sm font-normal ${focus && "description-link"}`}><MarkdownView markdown={description} /></div>
    <span className={`text-xs ${!focus && !value && "text-grey-300"}`}>Sample:</span>
    <div className="relative h-[40px] w-[40px] mt-[6px]">
      <div><Image onClick={() => show("merch", {open: true, picture:sample})} src={sample.url} layout="fill" objectFit="cover" className="cursor-zoom-in rounded" alt="campaign-sample"/></div>
    </div>
    <div className="my-[20px]">
      <div className={`${!focus && !file ? "text-grey-300 border-grey-300" : "dark:text-white text-blue-400"}  items-center w-full rounded border border-dashed justify-center 
        ${!file && focus && "border-blue-400 dark:border-white"} ${_error && file ? "border-red-150" : ""} ${ file && !_error ? "border-green-100": ""} `}>
        {!file ?
          <label htmlFor="fileUpload" onClick={e => e.stopPropagation()} className="flex items-center justify-center py-[16px] h-full w-full cursor-pointer">
            <MdDriveFolderUpload className="text-[20px] inline-block mr-[2px]" /> Upload File
            <input id="fileUpload" onChange={e => {e.stopPropagation(); uploadFile(e)}} className="opacity-0 w-0 h-0" type="file" accept="image/*"/>
          </label>
          :
          <div className="flex items-center justify-between py-[16px] px-[13px] h-full w-full">
            {//@ts-ignore 
              <span className="flex items-center max-w-[80%]">
                <Image src={file?.url ?? ""} objectFit="cover" width="24" height="24" alt="preview" />
                <span className="inline-block ml-[8px] image-text">
                  {file?.name}
                </span>
              </span>
            }
            <button onClick={(e) => { e.stopPropagation(), onChange(""); setFile(undefined), setError("") }}> 
              {uploading 
              ?
                <AiOutlineLoading3Quarters className="text-green-100 animate-spin text-[23px]" />
              :
                <IoCloseSharp className={`text-[25px] cursor-pointer ${_error && file ? "text-red-150" : ""} ${ file && !_error ? "text-green-100": ""}`} />
              }
            </button>
          </div>
        }
      </div>
      {(_error ) && focus && !uploading && <span className="text-red-150 inline-block mt-[8px]">*{
        (_error )
      }</span>}
      {uploading && <span className="inline-block mt-[8px]">Uploading...</span>}
    </div>
    {showBtns &&
      <div className="h-[48px] md:gap-14 flex justify-between">
        {!first && <div className={`h-full ${last ? "w-full" : "w-[100px] max-w-[240px]"} md:w-full `}><FormBack onClick={() => setFocus(index-1, true)} active={false} /> </div>}
        {!last && <div className={`h-full ${first ? "w-full" : "w-[156px] max-w-[500px]"} md:w-full `}><FormNext onClick={() => {value && setFocus(index+1, true)}} active={value && !error ? true : false} /></div>}
      </div>
    }
  </div>
}

export default ImageInput;
