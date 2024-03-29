import Layout from "../components/layout";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import {AiFillInstagram} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import Link from "next/link";
import Ribbon from "../assets/pictures/ribbon.png"
import Ribbon2 from "../assets/pictures/ribbon2.png"
import Head from "next/head";

const ContactUs = () => {

  return <div className="pt-[28px] md:pt-[75px]">
    <Head>
      <title>Contact Us - Freemerch</title>
      <meta name="description" content="Contact us to push your brand with campaigns on Freemerch" />
      {/* Twitter tags */}
      <meta name="og:title" content="Contact us to push your brand" />
      <meta name="og:description" content="Got questions, complaints or feedback? Contact us and we'll get back to you as soon as possible." 
      />
      <meta name="og:image" content="https://res.cloudinary.com/freemerchcloudinary/image/upload/v1663799457/freemerch_cover_xfvymg.png" />
    </Head>
    <div className="flex gap-2 flex-wrap rounded-[10px] 
      dark:text-white text-blue-400 justify-between 
      px-[21px] py-[29px]
      sm:px-[75px] sm:pt-[101px] sm:pb-[79px] bg-white 
      shadow-[0px_9px_16px_rgba(171,190,209,0.03)]
      relative
      overflow-hidden
      contact-us
      ">
      <div className=" absolute right-0 md:-top-0 w-[828px] -left-[30%] md:left-[30%]">
        <Image alt="ribbon" className="ribbon-1" src={Ribbon} />
      </div>
      <div className=" absolute right-0 md:-top-0 w-[828px] -left-[30%] md:left-[30%]">
        <Image alt="ribbon" className="ribbon-1" src={Ribbon2} />
      </div>
      <div className="z-[2]">
        <h1 className="mb-[10px] font-semibold text-3xl">Need Help? Get in touch.</h1>
        <p>Send us an email</p>
        {/* <p className="mt-[14px] whitespace-nowrap flex items-center cursor-pointer email"> */}
          <a href="mailto:freemerchteam@gmail.com" className="mt-[14px] flex items-center cursor-pointer email"  target={'_blank'} rel='noreferrer'>
            <>
              <span className="rounded-full inline-block h-[26px] mr-1 cursor-pointer bg-blue-400 p-[3px] dark:bg-white">
                <HiOutlineMail className="w-[21px] h-[21px]" fill="#ffffff" />
              </span> 
              freemerchteam@gmail.com
            </>
          </a>
        {/* </p> */}
      </div>
      <div className="text-right max-w-full grow z-[2]">
        <p className="font-semibold text-lg">Follow Us</p>
        <p className="mt-[5px] mb-[14px]">Reach us on social media</p>
        <div className="flex gap-2 justify-end">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/getFreemerch">
            <div className="rounded-full h-[26px] w-[26px] cursor-pointer max-w-min bg-blue-400 p-[5px] dark:bg-white">
              <BsTwitter className="" fill="#ffffff" />
            </div>
          </a>
          <a rel="noreferrer" target="_blank" href="https://t.me/getfreemerch">
            <div className="rounded-full h-[26px] w-[26px] cursor-pointer max-w-min bg-blue-400 dark:bg-white p-[5px]">
              <FaTelegramPlane className="" fill="#ffffff" />
            </div>
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/getfreemerch.io/">
            <div className="rounded-[10px] cursor-pointer max-w-min bg-blue-400 dark:bg-white">
              <AiFillInstagram className="h-[26px] w-[26px]" fill="#ffffff" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden
  ">
    <ContactUs />
  </Layout>
)

export default NewComponent;
