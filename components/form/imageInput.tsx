import Image from "next/image";
import { ReactElement, SyntheticEvent, useContext, useState } from "react";
import { FormBack, FormNext } from "./buttons";
import { MdDriveFolderUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {ImageType} from "../../types/index";
import { useModalContext } from "../../hooks/contexthooks";

interface IImageInput {
  title: string,
  description: string,
  placeholder: string,
  image: (className:string) => JSX.Element,
  first: boolean
  sample: string
}

class ExFile extends File {
  url?: string;
}

const ImageInput = (props: IImageInput) => {
  const {title, description, image, sample, first, placeholder} = props;
  const [focus, setFocus] = useState<boolean>();
  const [file, setFile] = useState<ExFile|undefined>();
  const { show } = useModalContext();

  const previewFile = ({target}: {target: HTMLInputElement}) : void => {
    if(target.files && target.files?.length !== 0) {
      const fileTypes = ["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"];
      const file: ExFile = target.files[0];
      if(!fileTypes.includes(file.type)){
        //TODO: add error logic
        console.log("image:invalid file type")
        return;
      };
      if(file.size > 5242880){
        //TODO: add error logic
        console.log("image:too large")
        return;
      }
      file.url = URL.createObjectURL(file);
      setFile(file)
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
    className="w-[342px] px-[21px] rounded-[10px] py-[21px] bg-blue-400 shadow-[0px_8px_16px_3px_#030324]">
    <p className="font-semibold text-lg text-white">{title}</p>
    <p className="text-grey-300 text-sm font-normal mb-[8px]">{description}</p>
    <span className="text-xs">Sample:</span>
    <div className="relative h-[40px] w-[40px] mt-[6px] mb-[24px]">
      <div><Image onClick={() => show("merch", {open: true, picture:samplePicture})} src={sample} layout="fill" objectFit="cover" className="cursor-pointer rounded" alt="campaign-sample"/></div>
    </div>

    <div className=" text-white items-center w-full rounded border border-dashed justify-center">
      {!file ?
        <label htmlFor="fileUpload" className="flex items-center justify-center py-[16px] h-full w-full cursor-pointer">
          <MdDriveFolderUpload className="text-[20px] inline-block mr-[2px]" /> Upload File
          <input id="fileUpload" className="opacity-0 w-0 h-0" onChange={previewFile} type="file" accept="image/*"/>
        </label>
        :
        <div className="flex items-center justify-between py-[16px] px-[13px] h-full w-full">
          <span className="flex items-center"><Image src={file?.url ?? ""} objectFit="cover" width="24" height="24" alt="preview" /><span className="inline-block ml-[8px]">{file?.name}</span></span>
          <button onClick={() => setFile(undefined)}> <IoCloseSharp className="text-[25px] cursor-pointer" /></button>
        </div>
      }
    </div>

    <div className="h-[48px] flex justify-between mt-[24px]">
      {!first && <div className="h-full w-[100px]"><FormBack active={false} /> </div>}
      <div className={`h-full ${first ? "w-full" : "w-[156px]"}`}><FormNext active={focus ?? false} /></div>
    </div>
  </div>
}

export default ImageInput;
