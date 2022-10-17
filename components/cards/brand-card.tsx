import Image from "next/image";

import { GoVerified } from "react-icons/go";

import Link from "next/link";
import { Brand, ImageType } from "../../types";
import { useElementSize } from "../../hooks/useSize";
import { AiFillQuestionCircle } from "react-icons/ai"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export function BrandCard (this: any, {brand}: {brand: Brand}){
  
  const {id, description, logo, logoBgColor, name} = brand;
  const {width: width1, ref: ref1} = useElementSize()
  const logoWidth = 32
  let logoHeight = logoWidth*brand.logo.ratio;
  logoHeight = logoHeight > 32 ? 80 : logoHeight;
  const shadow = "shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)]";

  return <div className={`cursor-pointer inline-block bg-grey-200 rounded-lg min-w-[163px] w-[399px] max-w-[399px]" }`} ref={ref1} >
    <Link href={`/brands/${name}`}>
      <div className={`m-[20px]`}>
        <div className="w-full mx-auto">
          <div className={`
            shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)] 
            rounded-lg h-[40px] w-[40px] flex items-center justify-center relative
          `
          }
          style={{background: logoBgColor}}
          >
          <Image src={brand.logo.url} className="mx-24" layout="fixed" width={logoWidth} height={logoHeight} alt="brand image" />
          <GoVerified className="fill-[#2382E1] w-[14px] absolute bottom-0 right-0 translate-x-[7px]"/>
          </div>
          
        </div>

        <p className="text-left mt-[4px] font-semibold text-xl text-blue-400">{name}</p>

        <p className={`text-left h-[70px] text-ellipsis overflow-hidden text-grey-700 mt-[13px] ${width1 <= 200 ? "text-[12px] leading-[15px]" : "text-sm"}`}>{description.substring(0, 100)+ "..." }</p>

      </div>
    </Link>
  </div>
}


export const BrandCardSkeleton = () => {

  return <SkeletonTheme>
    <div className={`bg-grey-200 min-w-[163px] w-[399px] max-w-[399px] p-2 rounded`}>
      <div className="w-full h-[50px] flex mb-6 items-center">
        <div className="h-[50px] w-[40px]"><Skeleton className="h-[50px]" /> </div> <div className=" ml-2 w-1/2"><Skeleton /></div>
      </div>

      <div className="w-3/4"><Skeleton /></div>
      &nbsp;
      <p className="w-full h-4 md:h-2 mb-2">
        <Skeleton />
      </p>
      <p className="w-full h-4 md:h-2  mb-2">
        <Skeleton />
      </p>
      <p className="w-full h-4 md:h-2  mb-6">
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