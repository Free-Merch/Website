import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import { ImageType } from "../../types";


interface IProjectCard {
  image: ImageType,
  bgColor: string,
  about: string,
  brand: string,
  campaigns: ImageType[]
  id: number
}

export const ProjectCard = ({ image, bgColor, about, brand, campaigns, id }: IProjectCard) => {

  const shadow = "shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)]"
  const items = campaigns?.map((campaign, index) => {
    return <div key={index}>
      <Image 
        className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" src={campaign.url} 
        alt={campaign.alternativeText} layout="fixed" width={"60px"} height={"60px"}
      />
    </div>
  })

  return <div className="min-w-[163px] md:w-[300px] transition-all duration-300 hover:scale-110 cursor-pointer inline-block bg-grey-200 rounded-lg max-w-[289px] p-3.5 mb-6">
    <Link href={`/projects/${id}`}>
      <div>
        <div className={`cursor-pointer bg-[${bgColor}] ${shadow} rounded-lg h-[200px] w-full flex items-center justify-center`}
          style={{backgroundColor: `${bgColor}`}}
        >
            <Image src={image.url} alt={image.alternativeText} layout="fixed" width={200} height={43}/>
        </div>

        <div className="mt-6">
          <p className="text-left text-xl text-blue-400 flex  items-center">
            <Link href={`/projects/${id}`} >
              <span className="">
              <span className="capitalize">{brand}</span> &nbsp;
              <BsArrowRight className="inline-block stroke-1"/>
              </span>
            </Link>
          </p>
          <p className="text-left text-grey-700 mt-2">{about}</p>

          <div className="justify-between text-left mt-2">
            <p className="text-blue-400">Merch</p>
            <div className="flex mt-2 child:mr-3 child:inline-block rounded-md">
              {items}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
}
