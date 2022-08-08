import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import { ImageType } from "../../types";
import { useWindowSize, useElementSize } from "../../hooks/useSize";


interface IProjectCard {
  image: ImageType,
  bgColor: string,
  about: string,
  brand: string,
  campaigns: ImageType[]
  id: number
}

export function ProjectCard (this: any, { image, bgColor, about, brand, campaigns, id }: IProjectCard){
  const {width: width1, ref: ref1} = useElementSize()
  const logoWidth = 75/100 * width1
  
  const shadow = "shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)]"
  const items = campaigns?.map((campaign, index) => {
    const width = 20/100 * width1
    const height = width/campaign.ratio

    return <div key={index} >
      <Image 
        className="rounded shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" 
        src={campaign.url} 
        alt={campaign.alternativeText} 
        width={ width}
        height={height}
      />
    </div>
  })

  return <div className={`transition-all duration-300 hover:scale-110 cursor-pointer 
    inline-block bg-grey-200 rounded-lg w-screen min-w-[163px] 
    max-w-[289px] p-${width1 <= 200 ? 3 : 3.5} flex-[1_0_163px]`} ref={ref1}>

    <Link href={`/projects/${id}`}>
      <div>
        <div className={`cursor-pointer bg-[${bgColor}] ${shadow} rounded-lg ${width1 <= 200 ? "h-[105px]" : "h-[200px]"}  w-full flex items-center justify-center`}
          style={{backgroundColor: `${bgColor}`}}
        >
          <Image src={image.url} alt={image.alternativeText} layout="fixed" width={logoWidth} height={logoWidth/image.ratio}/>
        </div>

        <div className={`${width1 <= 200 ? "mt-[5px]" : "mt-6"}`}>
          <p className={`text-left ${width1 <= 200 ? "text-[12px]" : "text-xl"} text-blue-400 flex items-center`}>
            <Link href={`/projects/${id}`}>
              <span className="">
              <span className="capitalize">{brand}</span> &nbsp;
              <BsArrowRight className="inline-block stroke-1"/>
              </span>
            </Link>
          </p>
          <p className={`text-left text-grey-700 mt-2 ${width1 <= 200 ? "text-[10px] mt-[5px] leading-[15px]" : "text-sm mt-2"}`}>{about}</p>

          <div className={`justify-between text-left ${width1 <= 200 ? "mt-[5px]" : "mt-2"}`}>
            <p className={`text-blue-400 ${width1 <= 200 && "text-[10px]"}`}>Merch</p>
            <div className={`flex items-end ${width1 <= 200 ? "mt-[5px]" : "mt-2"} child:mr-3 child:inline-block rounded-md`}>
              {items}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
}
