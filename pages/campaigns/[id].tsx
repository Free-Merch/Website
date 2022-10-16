import Layout from "../../components/layout";
import Image from "next/image";
import Form from "../../components/form";
import { Campaign_Q, ImageType, Question, TQuestion } from "../../types";
import formImages from "../../components/form/formImages";
import { useElementSize } from "../../hooks/useSize";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import { BiLinkAlt } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { ModalContext } from "../../context/modalContext";
import { useContext } from "react";
import { GetServerSideProps } from "next";
import getCampaign from "../../helpers/getCampaign";
import CampaignsSnippet from "../../components/campaignsSnippet";

const linkImages = {
  twitter: <BsTwitter className="cursor-pointer"/>,   
  website: <BiLinkAlt className="cursor-pointer"/>,
  facebook: <BsFacebook className="cursor-pointer" />,
  instagram: <BsInstagram className="cursor-pointer" />,
  discord: <BsInstagram className="cursor-pointer" />,
  telegram: <BsTelegram className="cursor-pointer" />
}

const Campaign = (props: {campaign: Campaign_Q}) => {
  const {width: width1} = useElementSize()
  const logoWidth = 20;
  const {campaign: {questions, merchandise, brand, identifier, name}} = props;
  const links = Object.entries(brand.links)?.map(([key, url], index) => {
    return <Link key={index} href={url} target="_blank">
      <span className={`cursor-pointer`}>{linkImages[key.toLowerCase() as keyof typeof linkImages]}</span>
    </Link>
  });

  const { show } = useContext(ModalContext);
  const images = merchandise.map((merch, index) =>
    <div key={index} className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
      <Image 
        src={merch.url}
        alt="" onClick={() => show("merch", {open: true, picture: merch})}
        className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)] cursor-zoom-in rounded-[5px] relative "
        layout="fill" objectFit="cover"
      />
    </div>
  )

  return <div>
      <div className="mb-[100px] max-w-[886px] mx-auto">
      <div className="w-full relative flex justify-between items-center h-[120px]">
          <div className="flex z-[1]">
            <div className={`cursor-pointer bg-white rounded h-[24px] w-[24px] flex items-center justify-center`}
              >
              <Image src={brand.logo.url} alt={brand.logo.alternativeText} layout="fixed" width={logoWidth} height={logoWidth/brand.logo.ratio}/>
            </div>
            <p className={`text-left ${width1 <= 200 ? "text-[14px]" : "text-xl"} ml-[10px] text-blue-400 flex items-center`}>
              <Link href={`/brands/${brand.name}`}>
                <>
                  <span className="capitalize text-blue-400 dark:text-white font-medium text-[20px]">Freemerch</span>
                  &nbsp;
                  <span className="relative">
                    <span className="absolute bg-white top-1/2 left-1/2 -z-[10] -translate-x-1/2 -translate-y-1/2 inline-block h-[8px] w-[8px]"></span>
                    <GoVerified className="fill-[#2382E1] w-[14px]"/>
                  </span>
                </>
              </Link>
            </p>
          </div>
          <div className="flex gap-2 text-lg text-black-200 dark:text-white z-[1]">
            {links}
          </div>
      </div>
      
      <div>
        <p className="text-blue-400 dark:text-white leading-[38px] font-semibold text-[24px]">Celebration Of Launch</p>
        <p className="dark:text-white leading-[24px] text-[14px]">To celebrate our launch, we are giving away 30 merch for free in our limited Freemerch designs.</p>
      </div>

      <div className="mt-[40px]">
        <p className="mb-[8px]">Rewards:</p>
        <div className="flex gap-[10px]">
          {images}
        </div>
      </div>

      <Form questions={questions} id={identifier} name={name} />
    </div>
    <div className="mt-[103px] w-full">
      <p className="text-blue-400 mb-[4px] mt-[50px] dark:text-white font-semibold text-xl text-center">Also View</p>
      <div className="flex justify-center flex-wrap">
        <CampaignsSnippet />
      </div>
    </div>
  </div>
}

const NewComponent = (campaign: Campaign_Q) => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-hidden">
    <Campaign campaign={campaign}/>
  </Layout>
);

export default NewComponent;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query?.id
  try {
    const campaign = await getCampaign(String(id));
    return {
      props: campaign
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}
