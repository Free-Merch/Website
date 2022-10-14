import Layout from "../../components/layout";
import Image from "next/image";
import Form from "../../components/form";
import { ImageType, Question, TQuestion } from "../../types";
import formImages from "../../components/form/formImages";
import { text } from "node:stream/consumers";
import { useElementSize } from "../../hooks/useSize";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import { BiLinkAlt } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { ModalContext } from "../../context/modalContext";
import { useContext } from "react";

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

const data: Question[] = [
  {type: TQuestion.TEXT, title: "Email", description: "Input your correct address for contact", placeholder: "Email",
    image: formImages["email"], name: "email",
    required: true,
    validation: "EMAIL",
  },
  { 
    type: TQuestion.TEXT, title: "Follow on Twitter", 
    description: "Please provide your Twitter profile url with your username. It must have at least 30 followers and show human activity. You must have followed us on Twitter.",
    placeholder: "https://twitter.com/getfreemerch", titleLink: "https://twitter.com/getfreemerch",
    image: formImages["twitter"], name: "twitter",
    required: false, validation: "TWITTER"
  },
  // {
  //   type: TQuestion.NUMBER, title: "Bybit uid", 
  //   description: "You can find it on your profile page. Select your profile button at the top left of the app to to your profile page.",
  //   placeholder: "114567",
  //   titleLink: "https://www.bybit.com/en-US/"
  // },
  {
    type: TQuestion.IMAGE, title: "Deposit Proof",
    description: "Please provide a screenshot like the one below showing either your P2P trading or deposit history of at least $10.",
    sample: "https://res.cloudinary.com/nonseodion/image/upload/v1664461952/eQnFS5BvowhmHUV3xUffTnNoVb8UvM1VMDMiPJsjL5e6heAruXMr8KJHpmDpzD_8PkrqNhEhICnJ07Y6VvDQPJ5it5JQv3I2saMtIyfu2vJ1fWTe_N1NzcMGOLhTb4w9PQ_w591_iliqee.jpg",
    name: "deposit-proof", validation: "IMAGE"
  },
  {
    type: TQuestion.RADIO, title: "Shirt size", name: "shirt-size", validation: "TEXT",
    description: "", radioTexts: ["XS", "S", "M", "L", "XL", "XXL"],
  }
]

const image = {
  alternativeText:"",
  url: "https://res.cloudinary.com/nonseodion/image/upload/v1660579251/logo_7c91fc5575.svg",
  ratio: 1,
}

 const samplePicture: ImageType = {
    url: "https://res.cloudinary.com/nonseodion/image/upload/v1664461952/eQnFS5BvowhmHUV3xUffTnNoVb8UvM1VMDMiPJsjL5e6heAruXMr8KJHpmDpzD_8PkrqNhEhICnJ07Y6VvDQPJ5it5JQv3I2saMtIyfu2vJ1fWTe_N1NzcMGOLhTb4w9PQ_w591_iliqee.jpg",
    alternativeText: "sample_picture_big",
    name: "sample picture",
    width: 591,
    height: 1280,
    ratio: 591/1280
  }

const Request = () => {
  const {width: width1, ref: ref1} = useElementSize()
  const logoWidth = 20

  const { show } = useContext(ModalContext);
  const images = [
    <div key={0} className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
      <Image 
        src="https://res.cloudinary.com/nonseodion/image/upload/v1664461952/eQnFS5BvowhmHUV3xUffTnNoVb8UvM1VMDMiPJsjL5e6heAruXMr8KJHpmDpzD_8PkrqNhEhICnJ07Y6VvDQPJ5it5JQv3I2saMtIyfu2vJ1fWTe_N1NzcMGOLhTb4w9PQ_w591_iliqee.jpg"
        alt="" onClick={() => show("merch", {open: true, picture: samplePicture})}
        className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)] cursor-zoom-in rounded-[5px] relative "
        layout="fill" objectFit="cover"
      />
    </div>,
  ]

  return <div className="mb-[100px]">
    <div className="w-full relative flex justify-between items-center h-[120px]">
      <div className="absolute -ml-[1000px] h-full md:dark:md:bg-blue-800 w-[10000px]  -z-0"></div>
        <div className="flex z-[1]">
          <div className={`cursor-pointer bg-white rounded h-[24px] w-[24px] flex items-center justify-center`}
            >
            <Image src={image.url} alt={image.alternativeText} layout="fixed" width={logoWidth} height={logoWidth/image.ratio}/>
          </div>
          <p className={`text-left ${width1 <= 200 ? "text-[14px]" : "text-xl"} ml-[10px] text-blue-400 flex items-center`}>
            <Link href={`/campaigns/${""}`}>
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
          <Link href="https://"><BsTwitter className="cursor-pointer"/></Link>
          <Link href="https://"><BiLinkAlt className="cursor-pointer"/></Link>
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

    <Form questions={data} />
  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-hidden">
    <Request />
  </Layout>
);

export default NewComponent;