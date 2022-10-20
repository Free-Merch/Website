import { CampaignCard, CampaignCardSkeleton } from "../../components/cards/campaign-card";
import Layout from "../../components/layout";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';

import { useState } from "react";
import { Brand, BrandBrief, Campaign } from "../../types";
import Head from "next/head";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { GetServerSideProps } from "next";
import getBrands from "../../helpers/getBrands";
import useCampaigns from "../../hooks/useCampaigns";
import { linkImages } from "../../hooks/images";

const orderFunctions = {
  "A-Z": (projects: Campaign[]) => projects?.sort((a, b) => a.name[0] < b.name[0] ? -1 : 1),
  "Z-A": (projects: Campaign[]) => projects?.sort((a, b) => a.name[0] > b.name[0] ? -1 : 1),
  "Most recent": (campaigns: Campaign[]) => campaigns?.sort((a, b) => a.id > b.id ? -1 : 1)
}

const Brand = (props: {brand: Brand}) => {
  const {brand} = props;
  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
  const links = Object.entries(brand.links)?.map(([key, url], index) => {
    return <a rel="noreferrer" key={index} href={url} target="_blank">
      <span className={`cursor-pointer`}>{linkImages[key.toLowerCase() as keyof typeof linkImages]}</span>
    </a>
  });
  
  // @ts-ignore
  const handleSetOrder = (value: Option) => setOrder(value)

  const [section, setSection] = useState<"ongoing"|"completed">("ongoing");
  let campaigns = useCampaigns(String(brand.id));
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
  const logoWidth = 70
  let logoHeight = logoWidth*brand.logo.ratio;
  logoHeight = logoHeight > 100 ? 80 : logoHeight;

  return <div className="my-12 mt-[60px]">
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

    <div className="w-full mx-auto pt-[60px]">
      <div className={`
        shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)] 
        rounded-lg h-[100px] w-[100px] flex items-center justify-center
      `
      }
      style={{background: brand.logoBgColor}}
      >
      <Image src={brand.logo.url} className="mx-24" layout="fixed" width={logoWidth} height={logoHeight} alt="brand image" />
      </div>
    </div>

      <div className="flex items-center justify-between mt-[10px] mb-[10px]">
        <div className="flex items-center">
          <span className="capitalize font-semibold text-[20px] dark:text-white text-blue-900">{brand.name}</span>
          &nbsp;
          <div className="relative">
            <span className="absolute bg-white top-1/2 left-1/2 -z-[1] -translate-x-1/2 -translate-y-1/2 inline-block h-[8px] w-[8px]"></span>
            <GoVerified className="fill-[#2382E1] w-[14px] z-[2]"/>
          </div>
        </div>
      </div>
      <div className=" flex justify-between w-full mb-[80px]">
        <span className="max-w-[586px] text-grey-300">{brand.description}</span>
        <div className="flex gap-2 text-lg text-black-200 dark:text-white z-[1]">
            {links}
        </div>
      </div>

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

const NewComponent = (brand: Brand) => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Brand brand={brand}/>
  </Layout>
);

export default NewComponent;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let brandName = context.query?.brand as string
  const letters = brandName.toLowerCase().split("")
  letters[0] = letters[0].toUpperCase()
  brandName = letters.join("");
  try {
    const brand = (await getBrands("",  brandName))[1];
    return {
      props: brand
    }
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    }
  }
}
