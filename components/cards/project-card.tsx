import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import { ImageType } from "../../types";
import { useWindowSize, useElementSize } from "../../hooks/useSize";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
  const {width: width2} = useWindowSize()
  const logoWidth = 40
  
  const shadow = "shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)]"
  const items = campaigns?.map((campaign, index) => {
    const width = 30
    const height = width/campaign.ratio

    return <div key={index} className="w-[30px] h-[30px] relative" >
      <Image 
        className="rounded shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" 
        src={campaign.url} 
        alt={campaign.alternativeText} 
        layout="fill"
        objectFit="cover"
      />
    </div>
  })

  return <div className={`cursor-pointer inline-block bg-grey-200 rounded-lg min-w-[163px] w-[399px] max-w-[399px]" }`} ref={ref1} >
    <Link href={`/campaigns/${id}`}>
      <div className={`my-[30px] md:mx-[21px] mx-[18px]`}>
        <div className="flex">
          <div className={`cursor-pointer bg-[${bgColor}] ${shadow} rounded-lg h-[50px] w-[50px] flex items-center justify-center`}
            style={{backgroundColor: `${bgColor}`}}
          >
            <Image src={image.url} alt={image.alternativeText} layout="fixed" width={logoWidth} height={logoWidth/image.ratio}/>
          </div>
          <p className={`text-left ${width1 <= 200 ? "text-[14px]" : "text-xl"} ml-[10px] text-blue-400 flex items-center`}>
            <Link href={`/campaigns/${id}`}>
              <span className="">
              <span className="capitalize">{brand}</span>
              </span>
            </Link>
          </p>
        </div>
        <p className={`text-left text-grey-700 mt-[13px] ${width1 <= 200 ? "text-[12px] leading-[15px]" : "text-sm"}`}>{about}</p>

        <div className={`justify-between text-left mt-[19px]`}>
          <p className={`text-blue-400 ${width1 <= 200 && "text-[12px]"}`}>Merch</p>
          <div className={`flex items-end ${width1 <= 200 ? "mt-[5px]" : "mt-2"} child:mr-3 child:inline-block rounded-md`}>
            {items}
          </div>
        </div>
      </div>
    </Link>
  </div>
}


export const ProjectCardSkeleton = () => {
  const {width: width1, ref: ref1} = useElementSize()
  const {width: width2} = useWindowSize()

  return <SkeletonTheme>
    <div className={`transition-all duration-300
      inline-block bg-grey-200 rounded-lg w-screen min-w-[163px] 
      max-w-[289px] ${width1 <= 200 ? "p-[12px]" : "p-[14px]"} ${width2 && width2 <= 544 && "max-w-[200px] flex-[1_0_163px]" }
      ${width2 && width2 <= 580 && "flex-[1_0_163px]" }`} ref={ref1} >
      <div className={`mb-2 rounded-lg ${width1 <= 200 ? "h-[105px]" : "h-[200px]"}  w-full flex items-center justify-center overflow-hidden`}>
        <Skeleton className={`h-full w-full`} containerClassName="w-full h-full"/>
      </div>

      <div className="w-1/2">
        <Skeleton />
      </div>

      <p className="w-full h-4 md:h-2 mb-2">
        <Skeleton />
      </p>
      <p className="w-full h-4 md:h-2  mb-2">
        <Skeleton />
      </p>
      <p className="w-full h-4 md:h-2  mb-3">
        <Skeleton />
      </p>
      
      <div className="flex gap-2 child:h-[50px] child:w-[40px]">
        <div><Skeleton className="h-[50px]" /></div>
        <div><Skeleton className="h-[50px]" /></div>
        <div><Skeleton className="h-[50px]" /></div>
      </div>

    </div>
  </SkeletonTheme>
}