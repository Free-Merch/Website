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

const orderFunctions = {
  "A-Z": (projects: Campaign[]) => projects.sort((a, b) => a.name[0] < b.name[0] ? -1 : 1),
  "Z-A": (projects: Campaign[]) => projects.sort((a, b) => a.name[0] > b.name[0] ? -1 : 1),
  "Most recent": (projects: Campaign[]) => projects
}

const Brand = (props: {brand: Brand}) => {
  const {brand} = props;
  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
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

    <div className="w-full mx-auto">
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

      <div className="flex items-center mt-[10px] mb-[10px]">
        <span className="capitalize font-semibold text-[20px] dark:text-white text-blue-900">{brand.name}</span>
        &nbsp;
        <span className="">
          <GoVerified className="fill-[#2382E1] w-[14px]"/>
        </span>
      </div>
      <p className="max-w-[586px] mb-[42px] text-grey-300">
        {brand.description}
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
    const brand = (await getBrands())[1];
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
