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

{/* <TextInput
        title="Email"
        description=""
        image={(className: string) => <HiOutlineMail className={`${className}`}/>}
        placeholder="Email"
        first={true}
      ></TextInput>

      <TextInput
        title="Follow On Twiiter"
        description="Please provide your Twitter profile url with your username. It must have at least 30 followers and show human activity. You must have followed us on Twitter."
        image={(className: string) => <BsTwitter className={`${className}`}/>}
        placeholder="Twitter username"
        first={false}
        titleLink="https://"
      ></TextInput>

      <NumberInput
        title="Bybit uid"
        description="You can find it on your profile page. Select your profile button at the top left of the app to to your profile page."
        placeholder="Bybit uid"
        first={false}
        titleLink="https://"
      ></NumberInput>

      <ImageInput 
        title="Deposit Proof"
        description="Please provide a screenshot like the one below showing either your P2P trading or deposit history of at least $10."
        image={(className: string) => <BsTwitter className={`${className}`}/>}
        first={false}
        sample="https://res.cloudinary.com/nonseodion/image/upload/v1664461952/eQnFS5BvowhmHUV3xUffTnNoVb8UvM1VMDMiPJsjL5e6heAruXMr8KJHpmDpzD_8PkrqNhEhICnJ07Y6VvDQPJ5it5JQv3I2saMtIyfu2vJ1fWTe_N1NzcMGOLhTb4w9PQ_w591_iliqee.jpg"
      />

      <RadioInput 
        title="Shirt size"
        description=""
        first={false}

      /> */}

// const data: Question[] = [
//   {type: TQuestion.TEXT, title: "Email", description: "Input your correct address for contact", placeholder: "Email",
//     image: formImages["email"], name: "email",
//     required: true,
//     validation: "EMAIL",
//     index: 0
//   },
//   { 
//     type: TQuestion.TEXT, title: "Follow on Twitter", 
//     description: "Please provide your Twitter profile url with your username. It must have at least 30 followers and show human activity. You must have followed us on Twitter.",
//     placeholder: "https://twitter.com/getfreemerch", titleLink: "https://twitter.com/getfreemerch",
//     image: formImages["twitter"], name: "twitter",
//     required: false, validation: "TWITTER",
//     index: 1
//   },
//   // {
//   //   type: TQuestion.NUMBER, title: "Bybit uid", 
//   //   description: "You can find it on your profile page. Select your profile button at the top left of the app to to your profile page.",
//   //   placeholder: "114567",
//   //   titleLink: "https://www.bybit.com/en-US/"
//   // },
//   {
//     type: TQuestion.IMAGE, title: "Deposit Proof",
//     description: "Please provide a screenshot like the one below showing either your P2P trading or deposit history of at least $10.",
//     sample: "https://res.cloudinary.com/nonseodion/image/upload/v1664461952/eQnFS5BvowhmHUV3xUffTnNoVb8UvM1VMDMiPJsjL5e6heAruXMr8KJHpmDpzD_8PkrqNhEhICnJ07Y6VvDQPJ5it5JQv3I2saMtIyfu2vJ1fWTe_N1NzcMGOLhTb4w9PQ_w591_iliqee.jpg",
//     name: "deposit-proof", validation: "IMAGE",
//     index: 2, required: false
//   },
//   {
//     type: TQuestion.RADIO, title: "Shirt size", name: "shirt-size", validation: "TEXT",
//     description: "", radioTexts: ["XS", "S", "M", "L", "XL", "XXL"],
//     index: 3, required:false
//   }
// ]

// const image = {
//   alternativeText:"",
//   url: "https://res.cloudinary.com/nonseodion/image/upload/v1660579251/logo_7c91fc5575.svg",
//   ratio: 1,
// }

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

  return <div className="mb-[100px]">
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
    <div className="mt-[103px] w-full">
      <p className="text-blue-500 mb-[4px] mt-[50px] dark:text-white font-semibold text-xl text-center">Also View</p>
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
