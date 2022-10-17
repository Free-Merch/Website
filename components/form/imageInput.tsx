import Image from "next/image";
import { ReactElement, SyntheticEvent, useContext, useState } from "react";
import { FormBack, FormNext } from "./buttons";
import { MdDriveFolderUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {IImageInput, IImageInput1, ImageType} from "../../types/index";
import { useModalContext } from "../../hooks/contexthooks";
import { TbExternalLink } from "react-icons/tb";
import { FormClient } from "../../helpers/formClient";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


interface ExFile extends File {
  url?: string;
}
const fileTypes = ["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"];

const ImageInput = (props: IImageInput1) => {
  const {title, description, onChange, value, sample, first, last, titleLink, focus, setFocus, index} = props;
  const { show } = useModalContext();
  const [file, setFile] = useState<File>();
  const [uploading, setUploading] = useState<Boolean>();
  const [error, setError] = useState<string>("")

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
      setUploading(false);
      onChange(url)
    }
  }

  return <div 
    onClick={() => setFocus(index, true)}
    className={`${focus || file ? "bg-white dark:bg-blue-400 py-[21px]" : ""} cursor-pointer w-full px-[21px] rounded-[10px] 
      shadow-[0px_9px_16px_rgba(171,190,209,0.03)] dark:shadow-[0px_8px_16px_3px_#030324]`}>
    {
      !titleLink ?
      <p className={`font-semibold flex items-center text-lg text-blue-400 dark:text-white`}>
        {title}
      </p> :
      <a rel="noreferrer" href={titleLink} target="_blank">
        <div className={`max-w-max underline font-semibold flex items-center text-blue-400 text-lg dark:text-white`}>
          {title} <TbExternalLink className="text-[22px] inline-block ml-[4px]" />
        </div>
      </a>
    }
    <p className="text-grey-300 text-sm font-normal mb-[8px]">{description}</p>
    <span className="text-xs">Sample:</span>
    <div className="relative h-[40px] w-[40px] mt-[6px] mb-[24px]">
      <div><Image onClick={() => show("merch", {open: true, picture:sample})} src={sample.url} layout="fill" objectFit="cover" className="cursor-zoom-in rounded" alt="campaign-sample"/></div>
    </div>

    <div className={`text-blue-400 dark:text-white items-center w-full rounded border border-dashed justify-center ${!file && "border-blue-400 dark:border-white"} ${error && file ? "border-red-150" : ""} ${ file && !error ? "border-green-100": ""} `}>
      {!file ?
        <label htmlFor="fileUpload" className="flex items-center justify-center py-[16px] h-full w-full cursor-pointer">
          <MdDriveFolderUpload className="text-[20px] inline-block mr-[2px]" /> Upload File
          <input id="fileUpload" onChange={uploadFile} className="opacity-0 w-0 h-0" type="file" accept="image/*"/>
        </label>
        :
        <div className="flex items-center justify-between py-[16px] px-[13px] h-full w-full">
          {//@ts-ignore 
            <span className="flex items-center"><Image src={file?.url ?? ""} objectFit="cover" width="24" height="24" alt="preview" /><span className="inline-block ml-[8px]">{file?.name}</span></span>
          }
          <button onClick={() => {onChange(""), setFile(undefined), setError("")}}> 
            {uploading 
            ?
              <AiOutlineLoading3Quarters className="text-green-100 animate-spin text-[23px]" />
            :
              <IoCloseSharp className={`text-[25px] cursor-pointer ${error && file ? "text-red-150" : ""} ${ file && !error ? "text-green-100": ""}`} />
            }
          </button>
        </div>
      }
    </div>
      {error && focus && <span className="text-red-150 inline-block mt-[8px]">*{error}</span>}
      {uploading && <span className="inline-block mt-[8px]">Uploading...</span>}
    {focus &&
      <div className="h-[48px] md:gap-14 flex justify-between mt-[24px]">
        {!first && <div className={`h-full ${last ? "w-full" : "w-[100px] max-w-[240px]"} md:w-full `}><FormBack onClick={() => setFocus(index-1, true)} active={false} /> </div>}
        {!last && <div className={`h-full ${first ? "w-full" : "w-[156px] max-w-[500px]"} md:w-full `}><FormNext onClick={() => {value && setFocus(index+1, true)}} active={value && !error ? true : false} /></div>}
      </div>
    }
  </div>
}

export default ImageInput;
