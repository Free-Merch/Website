import { CampaignCard, CampaignCardSkeleton } from "../../components/cards/campaign-card";
import Layout from "../../components/layout";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

import { useState } from "react";
import {  Campaign } from "../../types";
import Head from "next/head";
import useCampaigns from "../../hooks/useCampaigns";

const orderFunctions = {
  "A-Z": (campaigns: Campaign[]) => campaigns?.sort((a, b) => a.name[0] < b.name[0] ? -1 : 1),
  "Z-A": (campaigns: Campaign[]) => campaigns?.sort((a, b) => a.name[0] > b.name[0] ? -1 : 1),
  "Most recent": (campaigns: Campaign[]) => campaigns?.sort((a, b) => a.id > b.id ? -1 : 1)
}

const Campaigns = () => {
  
  const options = [
    {value: "Most recent", label: "Most recent"},
    {value: "A-Z", label: "A-Z"},
    {value: "Z-A", label: "Z-A"}
  ];

  const campaigns = useCampaigns()
  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
  // @ts-ignore
  const handleSetOrder = (value: Option) => setOrder(value)

  const [section, setSection] = useState<"ongoing"|"completed">("ongoing");
  const activeCampaigns: JSX.Element[] = []
  const inActiveCampaigns: JSX.Element[] = []
  const CampaignCards = orderFunctions[order.value as keyof typeof orderFunctions](campaigns)?.map((campaign, index) => {
    const { brand, id, merchandise, description, name, active } =  campaign;
    const card = <CampaignCard  
        merchandise={merchandise}
        brandId={brand.id}
        image={brand.logo}
        brand={brand.name}
        active={active}
        name={name}
        about={description}
        bgColor={brand.logoBgColor}
        id={id}
        key={index}
      />
    active ? activeCampaigns.push(card) : inActiveCampaigns.push(card);
    return card;
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
    <div className="flex justify-between pt-[50px]">
      <h1 className="text-[18px] md:text-3xl font-semibold text-black-900 dark:text-white">Campaigns</h1>
      <Dropdown 
        arrowClosed={ <IoIosArrowDown className="arrow" />}
        arrowOpen={<IoIosArrowUp className="arrow" />}
        value={order} options={options} onChange={handleSetOrder}  placeholder="Most recent" />
    </div>

    {/* <div className="mt-7 mb-10 flex flex-wrap justify-center gap-4">
      {CampaignCards || CampaignCardSkeletons}
    </div> */}
    {CampaignCards 
      ?
        <>
          <div className="mx-auto max-w-max">
            <button onClick={() => setSection("ongoing")} className={`dark:text-white text-blue-900 py-0 font-semibold text-xl 
              ${ section === "ongoing" ? "border-b-2 border-green-100" : ""}`}>Ongoing</button>
            <span className="inline-block w-[40px] md:w-[80px]"></span>
            <button onClick={() => setSection("completed")} className={`dark:text-white text-blue-900 py-0 font-semibold text-xl  
              ${ section === "completed" ? "border-b-2 border-green-100" : ""}`}>Completed</button>
          </div>
          
          {section === "ongoing" ?
              <div className="mt-7 mb-10 flex flex-wrap justify-center gap-4">
                {activeCampaigns.length > 0 ? activeCampaigns : <div className="mt-20">There are currently no ongoing campaigns</div>}
              </div>
            :
              <div className="mt-7 mb-10 flex flex-wrap justify-center gap-4">
                {inActiveCampaigns.length > 0 ? inActiveCampaigns : <div className="mt-20">There are currently no completed campaigns</div>}
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
