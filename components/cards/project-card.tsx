import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

import BinanceText from "../../assets/pictures/binance_text.png";
import BlackShirt from "../../assets/pictures/black-shirt.png";
import WhiteCap from "../../assets/pictures/white-cap2.png";
import WhiteBook from "../../assets/pictures/whiteback-book.png";
import Mexc from "../../assets/pictures/mexc.png";
import Link from "next/link";

const types = {
  binance: {image: BinanceText, bgColor: "bg-blue-400", shadow: "shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)]"},
  mexc: {image: Mexc, bgColor: "bg-grey-200", shadow: "shadow-[0px_0px_10px_6px_rgba(46,200,102,0.04)]"}
}


export const ProjectCard = ({type}: {type: keyof typeof types}) => {
  const {shadow, image, bgColor} = types[type];

  return <div className="w-[300px] inline-block bg-grey-200 rounded-lg max-w-[289px] p-3.5 mb-5">
    <Link href="/projects/project" >
      <div className={`cursor-pointer ${bgColor} ${shadow} rounded-lg h-[200px] w-full flex items-center justify-center`}>
          <Image src={image} alt={"Binance"} />
      </div>
    </Link>
    <div className="mt-6">
      <p className="text-left text-xl text-blue-400 flex  items-center">
        <Link href="/projects/project" >
          <span className="cursor-pointer">
          <span className="capitalize">{type}</span> &nbsp;
          <BsArrowRight className="inline-block stroke-1"/>
          </span>
        </Link>
      </p>
      <p className="text-left text-grey-700 mt-2">Lorem ipsum dolor sit amet, ectetur adipiscing elit ut aliquam, purus sit amet luctus</p>

      <div className="justify-between text-left mt-2">
        <p className="text-blue-400">Merch</p>
        <div className="flex mt-2 child:mr-3 child:inline-block rounded-md">
          <div><Image className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" src={BlackShirt} alt="shirt" layout="fixed" width={"60px"} height={"60px"}/></div>
          <div><Image className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" src={WhiteCap} alt="cap" layout="fixed" width={"60px"} height={"60px"}/></div>
          <div><Image className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" src={WhiteBook} alt="book" layout="fixed" width={"60px"} height={"60px"}/></div>
        </div>
      </div>
    </div>
  </div>
}