import Image from "next/image";

import { GoVerified } from "react-icons/go";

import Link from "next/link";
import { ImageType } from "../../types";
import { useElementSize } from "../../hooks/useSize";
import { AiFillQuestionCircle } from "react-icons/ai"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ICampaignCard {
  image: ImageType,
  bgColor: string,
  about: string,
  name: string
  brand: string,
  merchandise: ImageType[]
  id: number
  active: boolean,
  brandId: number,
}

export function CampaignCard (this: any, { image, bgColor, about, brand, merchandise, active, brandId, id, name}: ICampaignCard){
  const {width: width1, ref: ref1} = useElementSize()
  const logoWidth = 20

  const shadow = "shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)]"
  const items = merchandise?.map((merch, index) => {

    return <div key={index} className="w-[36px] h-[30px] relative shadow-[0px_8px_16px_rgba(171,190,209,0.4)] rounded" >
      <Image 
        className="rounded"
        src={merch.url} 
        alt={merch.alternativeText} 
        layout="fill"
        objectFit="cover"
      />
    </div>
  })

  return <div className={`cursor-pointer inline-block bg-grey-200 rounded-lg min-w-[163px] w-[399px] max-w-[399px]" }`} ref={ref1} >
    <Link href={`/campaigns/${name.toLowerCase().replace(/\s+/g, "-")}`} passHref>
      <a>
        <div className={`m-[20px]`}>
          <div className="flex mb-[4px] justify-between items-center" onClick={(e) => e.stopPropagation()}>
              <div className="flex bg-grey-100 max-w-max py-[8px] px-[8px] rounded-[15px] items-center" >
                <div className={`cursor-pointer bg-[${bgColor}] ${shadow} rounded h-[24px] w-[24px] flex items-center justify-center`}
                  style={{backgroundColor: `${bgColor}`}}
                >
                  {image.url 
                  ?
                    <Image src={image.url} alt={image.alternativeText} layout="fixed" width={logoWidth} height={logoWidth/image.ratio}/>
                  : <AiFillQuestionCircle className="w-[20px] h-[20px] fill-green-100" />}
                </div>
                <p className={`text-left  ${width1 <= 200 ? "text-[14px]" : "text-xl"} ml-[10px] text-blue-400 flex items-center`}>
                  
                    <>
                      <span className="capitalize font-medium text-[14px]">{brand}</span>
                      &nbsp;
                    </>
                </p>
                <div className="relative flex">
                  <span className=" bg-white top-1/2 left-1/2  inline-block h-[8px] w-[8px]"></span>
                  <GoVerified className="fill-[#2382E1] w-[14px]"/>
                </div>
              </div>
            <div className={`${active ? "text-green-100" : "text-red-150"}  flex items-center`}>
              <div className={`${active ? "bg-green-100" : "bg-red-150"} rounded-full w-[5px] h-[5px]`}></div>  
              &nbsp;
              <span>{active ? "Ongoing" : "Completed"}</span>
            </div>
          </div>

          <div className="text-left font-semibold text-xl text-blue-400">{name}</div>

          <p className={`text-left brand-text mb-[20px] text-ellipsis overflow-hidden text-grey-700 mt-[12px] ${width1 <= 200 ? "text-[12px] leading-[15px]" : "text-sm"}`}>{about}</p>

          <div className={`justify-between text-left mt-[5px]`}>
            <div className={`text-blue-400 ${width1 <= 200 && "text-[12px]"}`}>Reward:</div>
            <div className={`flex gap-2 items-end ${width1 <= 200 ? "mt-[5px]" : "mt-2"} child:inline-block rounded-md`}>
              {items}
            </div>
          </div>
        </div>
      </a>
    </Link>
  </div>
}


export const CampaignCardSkeleton = () => {

  return <SkeletonTheme>
    <div className={`bg-grey-200 min-w-[163px] py-[20px] w-[399px] max-w-[399px] px-[20px] md:px-[40px] rounded`}>
      <div className="w-full  flex mb-[20px] items-center">
       <div className="w-1/2"><Skeleton /></div>
      </div>

      <div className="w-3/4"><Skeleton /></div>
      &nbsp;
      <p className="w-full h-4 md:h-2 mb-2">
        <Skeleton />
      </p>
      <p className="w-full h-4 md:h-2  mb-2">
        <Skeleton />
      </p>
      <p className="w-full h-4 md:h-2  mb-2">
        <Skeleton />
      </p>
      
      <div className="flex gap-2 mt-[20px] child:h-[50px] child:w-[40px]">
        <div><Skeleton className="h-[50px]" /></div>
        <div><Skeleton className="h-[50px]" /></div>
        <div><Skeleton className="h-[50px]" /></div>
      </div>

    </div>
  </SkeletonTheme>
}