import { CampaignCard, CampaignCardSkeleton } from "../../components/cards/campaign-card";
import Layout from "../../components/layout";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {FiSearch} from "react-icons/fi";
import { useState } from "react";
import {  Brand, Campaign } from "../../types";
import Head from "next/head";
import useCampaigns from "../../hooks/useCampaigns";
import useBrands from "../../hooks/useBrands";
import { BrandCard, BrandCardSkeleton } from "../../components/cards/brand-card";

const orderFunctions = {
  "A-Z": (campaigns: Brand[]) => campaigns.sort((a, b) => a.name[0] < b.name[0] ? -1 : 1),
  "Z-A": (campaigns:  Brand[]) => campaigns.sort((a, b) => a.name[0] > b.name[0] ? -1 : 1),
  "Most recent": (projects: Brand[]) => projects
}

const BrandCardSkeletons = [<BrandCardSkeleton key={1}/>, <BrandCardSkeleton key={2} />, <BrandCardSkeleton key={3} />, <CampaignCardSkeleton key={4} />]

const Campaigns = () => {
  
  const options = [
    {value: "Most recent", label: "Most recent"},
    {value: "A-Z", label: "A-Z"},
    {value: "Z-A", label: "Z-A"}
  ];

  let brands = useBrands();
  brands = brands.slice(1)

  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
  // @ts-ignore
  const handleSetOrder = (value: Option) => setOrder(value)


  const BrandCards = orderFunctions[order.value as keyof typeof orderFunctions](brands)?.map((brand, index) => {
    return <BrandCard 
        brand={brand}
        key={index}
      />
  })

  const CampaignCardSkeletons = [<CampaignCardSkeleton key={1}/>, <CampaignCardSkeleton key={2} />, <CampaignCardSkeleton key={3} />, <CampaignCardSkeleton key={4} />]

  return <div className="my-12">
    <Head>
      <title>Brands - Freemerch</title>
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
      <h1 className="text-[18px] md:text-3xl font-semibold text-black-900 dark:text-white">Brands</h1>
      {/* <Dropdown 
        arrowClosed={ <IoIosArrowDown className="arrow" />}
        arrowOpen={<IoIosArrowUp className="arrow" />}
        value={order} options={options} onChange={handleSetOrder}  placeholder="Most recent" /> */}
    </div>
    <div className="h-[46px] rounded-[10px] flex mt-[40px] mb-[60px] w-full items-center justify-between bg-white dark:bg-grey-550 px-[18px] pt-[13px] pb-[9px]
      shadow-[inset_0px_1px_2px_rgba(11,18,55,0.2)] dark:shadow-[0px_8px_16px_3px_#030324]">
      <FiSearch className="mr-[14px] text-[24px] text-black-100 dark:text-white stroke-[2px]" /> 
      <input className="bg-transparent w-full outline-none placeholder:text-grey-400 dark:placeholder:text-grey-650" placeholder="Search for Brands"/>
    </div>

    <div className="mb-10 flex flex-wrap justify-center gap-4">
      {BrandCards || BrandCardSkeletons}
    </div>

  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Campaigns />
  </Layout>
);

export default NewComponent;
