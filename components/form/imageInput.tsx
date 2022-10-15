import Image from "next/image";
import { ReactElement, SyntheticEvent, useContext, useState } from "react";
import { FormBack, FormNext } from "./buttons";
import { MdDriveFolderUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {IImageInput, IImageInput1, ImageType} from "../../types/index";
import { useModalContext } from "../../hooks/contexthooks";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";


interface ExFile extends File {
  url?: string;
}

const ImageInput = (props: IImageInput1) => {
  const {title, description, value:file, error, name, register, onChange, sample, first, titleLink, focus, setFocus, index} = props;
  const { show } = useModalContext();
  
  const previewFile = ({target}: {target: HTMLInputElement}) : void => {
    if(target.files && target.files?.length !== 0) {
      const file: ExFile = target.files[0];
      file.url = URL.createObjectURL(file);
      onChange(file)
    }
  }

  const samplePicture: ImageType = {
    url: sample,
    alternativeText: "sample_picture_big",
    name: "sample picture",
    width: 591,
    height: 1280,
    ratio: 591/1280
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
      <Link href={titleLink} >
        <div className={`underline font-semibold flex items-center text-blue-400 text-lg dark:text-white`}>
          {title} <TbExternalLink className="text-[22px] inline-block ml-[4px]" />
        </div>
      </Link>
    }
    <p className="text-grey-300 text-sm font-normal mb-[8px]">{description}</p>
    <span className="text-xs">Sample:</span>
    <div className="relative h-[40px] w-[40px] mt-[6px] mb-[24px]">
      <div><Image onClick={() => show("merch", {open: true, picture:samplePicture})} src={sample} layout="fill" objectFit="cover" className="cursor-zoom-in rounded" alt="campaign-sample"/></div>
    </div>

    <div className={`text-blue-400 dark:text-white items-center w-full rounded border border-dashed justify-center ${!file && "border-blue-400 dark:border-white"} ${error && file ? "border-red-150" : ""} ${ file && !error ? "border-green-100": ""} `}>
      {!file ?
        <label htmlFor="fileUpload" className="flex items-center justify-center py-[16px] h-full w-full cursor-pointer">
          <MdDriveFolderUpload className="text-[20px] inline-block mr-[2px]" /> Upload File
          <input id="fileUpload" {...register(name, {onChange: previewFile})} className="opacity-0 w-0 h-0" type="file" accept="image/*"/>
        </label>
        :
        <div className="flex items-center justify-between py-[16px] px-[13px] h-full w-full">
          {//@ts-ignore 
            <span className="flex items-center"><Image src={file?.url ?? ""} objectFit="cover" width="24" height="24" alt="preview" /><span className="inline-block ml-[8px]">{file?.name}</span></span>
          }
          <button onClick={() => {onChange(undefined)}}> <IoCloseSharp className={`text-[25px] cursor-pointer ${error && file ? "text-red-150" : ""} ${ file && !error ? "text-green-100": ""}`} /></button>
        </div>
      }
    </div>
      {error && focus && <span className="text-red-150 inline-block mt-[8px]">*{error}</span>}
    {focus &&
      <div className="h-[48px] flex justify-between mt-[24px]">
        {!first && <div className="h-full w-[100px]"><FormBack onClick={() => setFocus(index-1, true)} active={false} /> </div>}
        <div className={`h-full ${first ? "w-full" : "w-[156px]"}`}><FormNext onClick={() => {file && setFocus(index+1, true)}} active={file && !error ? true : false} /></div>
      </div>
    }
  </div>
}

export default ImageInput;
