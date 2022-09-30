import Image from "next/image";
import { ReactElement, useState } from "react";
import { FormBack, FormNext } from "./buttons";

interface IImageInput {
  title: string,
  description: string,
  placeholder: string,
  image: (className:string) => JSX.Element,
  first: boolean
  sample: string
}

const ImageInput = (props: IImageInput) => {
  const {title, description, image, sample, first, placeholder} = props;
  const [focus, setFocus] = useState<boolean>();

  return <div 
    className="w-[342px] px-[21px] rounded-[10px] py-[21px] bg-blue-400 shadow-[0px_8px_16px_3px_#030324]">
    <p className="font-semibold text-lg text-white">{title}</p>
    <p className="text-grey-300 text-sm font-normal">{description}</p>
    <span>Sample:</span>
    <div className="relative h-[40px] w-[40px]">
      <div><Image src={sample} layout="fill" objectFit="cover" alt="campaign-sample"/></div>
    </div>
    <input type="image" />
    <div className="h-[48px] flex justify-between">
      {!first && <div className="h-full w-[100px]"><FormBack active={false} /> </div>}
      <div className={`h-full ${first ? "w-full" : "w-[156px]"}`}><FormNext active={focus ?? false} /></div>
    </div>
  </div>
}

export default ImageInput;
