import { CampaignCard, CampaignCardSkeleton } from "../../components/cards/campaign-card";
import Layout from "../../components/layout";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import useProjects from "../../hooks/useBrands";

import { useState } from "react";
import { BrandBrief, Campaign } from "../../types";
import Head from "next/head";
import useCampaigns from "../../hooks/useCampaigns";
import useBrands from "../../hooks/useBrands";

const orderFunctions = {
  "A-Z": (campaigns: Campaign[]) => campaigns.sort((a, b) => a.name[0] < b.name[0] ? -1 : 1),
  "Z-A": (campaigns: Campaign[]) => campaigns.sort((a, b) => a.name[0] > b.name[0] ? -1 : 1),
  "Most recent": (projects: Campaign[]) => projects
}

const Campaigns = () => {
  
  const options = [
    {value: "Most recent", label: "Most recent"},
    {value: "A-Z", label: "A-Z"},
    {value: "Z-A", label: "Z-A"}
  ];

  const campaigns = useCampaigns()
  const brands = useBrands();

  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
  // @ts-ignore
  const handleSetOrder = (value: Option) => setOrder(value)


  const CampaignCards = orderFunctions[order.value as keyof typeof orderFunctions](campaigns)?.map((campaign, index) => {
    const { description, name, merchandise, brand, active, id } = campaign;

    return <CampaignCard  
        brand={brand.name}
        name={name}
        image={brand.logo}
        about={description}
        bgColor={brand.logoBgColor}
        merchandise={merchandise}
        active={active}
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
    <div className="flex justify-between pt-[50px]">
      <h1 className="text-[18px] md:text-3xl font-semibold text-black-900 dark:text-white">Campaigns</h1>
      <Dropdown 
        arrowClosed={ <IoIosArrowDown className="arrow" />}
        arrowOpen={<IoIosArrowUp className="arrow" />}
        value={order} options={options} onChange={handleSetOrder}  placeholder="Most recent" />
    </div>

    <div className="mt-7 mb-10 flex flex-wrap justify-center gap-4">
      {CampaignCards || CampaignCardSkeletons}
    </div>

  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Campaigns />
  </Layout>
);

export default NewComponent;
