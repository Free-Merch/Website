import { CampaignCard, CampaignCardSkeleton } from "../../components/cards/campaign-card";
import Layout from "../../components/layout";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import useProjects from "../../hooks/useBrands";

import { useState } from "react";
import { BrandBrief } from "../../types";
import Head from "next/head";
import Image from "next/image";
import { GoVerified } from "react-icons/go";

const orderFunctions = {
  "A-Z": (projects: BrandBrief[]) => projects.sort((a, b) => a.brand[0] < b.brand[0] ? -1 : 1),
  "Z-A": (projects: BrandBrief[]) => projects.sort((a, b) => a.brand[0] > b.brand[0] ? -1 : 1),
  "Most recent": (projects: BrandBrief[]) => projects
}

const Campaigns = () => {
  
  const options = [
    {value: "Most recent", label: "Most recent"},
    {value: "A-Z", label: "A-Z"},
    {value: "Z-A", label: "Z-A"}
  ];

  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
  // @ts-ignore
  const handleSetOrder = (value: Option) => setOrder(value)

  const [section, setSection] = useState<"ongoing"|"completed">("ongoing");

  let projects = useProjects()
  const CampaignCards = orderFunctions[order.value as keyof typeof orderFunctions](projects)?.map((project, index) => {
    const { about, logo, campaigns, brand, logoBgColor, id } = project;
    return <CampaignCard  
        brand={brand}
        image={logo}
        about={about}
        bgColor={logoBgColor}
        campaigns={campaigns}
        id={id}
        key={index}
      />
  })

  const CampaignCardSkeletons = [<CampaignCardSkeleton key={1}/>, <CampaignCardSkeleton key={2} />, <CampaignCardSkeleton key={3} />, <CampaignCardSkeleton key={4} />]

  return <div className="my-12">
    <Head>
      <title>Campaigns - Freemerch</title>
      <meta name="description" content="All active campaigns on Freemerch. Campaigns are brand adverts to perform activities and win free merchandise from them.."/>
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@getFreemerch" />
      <meta name="twitter:title" content="Join a campaign to win a free merchandise." />
      <meta name="twitter:description" 
        content="Campaigns are brand adverts to perform activities and win free merchandise from them." 
      />
      <meta name="twitter:image" content="https://res.cloudinary.com/freemerchcloudinary/image/upload/v1663799457/freemerch_cover_xfvymg.png" />
    </Head>

    <div className="w-full max-w-[1252px] mx-auto">
      <div className={`
        shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)] 
        rounded-lg h-[100px] w-[100px] flex items-center justify-center
        bg-blue-400
        `
      }
      >
      <Image src="https://res.cloudinary.com/nonseodion/image/upload/v1659695499/binance_text_17a78e9dee.png" className="mx-24" width={70} height={15} alt="brand image" />
      </div>
    </div>

      <div className="flex items-center mt-[10px] mb-[10px]">
        <span className="capitalize font-semibold text-[20px] dark:text-white text-blue-900">{"Binance"}</span>
        &nbsp;
        <span className="">
          <GoVerified className="fill-[#2382E1] w-[14px]"/>
        </span>
      </div>
      <p className="max-w-[586px] mb-[42px] text-grey-300">
        Lorem ipsum dolor sitascad, cdjcdccdaamet, consectetg elit ut aliquam, 
        purus sitmet luctus venenatis, lectusagna fringilla urna, 
        porttitorhoncus dolor purus non enim
      </p>

    {CampaignCards 
      ?
        <>
          <div className="mx-auto max-w-max">
            <button onClick={() => setSection("ongoing")} className={`dark:text-white text-blue-900 py-0 font-semibold text-xl 
              ${ section === "ongoing" ? "border-b-2 border-green-100" : ""}`}>Ongoing</button>
            <span className="inline-block w-[80px]"></span>
            <button onClick={() => setSection("completed")} className={`dark:text-white text-blue-900 py-0 font-semibold text-xl  
              ${ section === "completed" ? "border-b-2 border-green-100" : ""}`}>Completed</button>
          </div>
          
          {section === "ongoing"?
              <div className="mt-7 mb-10 flex flex-wrap justify-center gap-4">
                {CampaignCards}
              </div>
            :
              <div className="mt-7 mb-10 flex flex-wrap justify-center gap-4">
                {CampaignCards}
              </div>
          }
        </> 
      :
      <div className="flex flex-wrap gap-2">{CampaignCardSkeletons}</div>
    }

  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Campaigns />
  </Layout>
);

export default NewComponent;
