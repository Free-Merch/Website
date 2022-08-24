import { GreenButton, WhiteButton2 } from "../components/buttons";
import Layout from "../components/layout";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {

  return <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <GreenButton className="px-8 py-2" >Company</GreenButton>
      <span className="block sm:inline-block">&nbsp; &nbsp;</span>
      <WhiteButton2 className="px-8 py-2 bg-white" >Community/Individual</WhiteButton2>
      <h1 className="text-blue-900 dark:text-white mt-20 font-semibold text-3xl">Follow Us</h1>
      <p className="text-blue-400 text-base dark:text-white">Follow us on Social Media</p>
      <div className="flex gap-2 justify-center">
        <Link href="https://twitter.com/getFreemerch">
          <div className="rounded-full cursor-pointer max-w-min bg-[#00acee] p-[13px] mt-5">
            <BsTwitter className="h-[22px] w-[22px]" fill="#ffffff" />
          </div>
        </Link>
        <Link href="https://t.me/getfreemerch">
          <div className="rounded-full cursor-pointer max-w-min bg-[#0088cc] p-[13px] mt-5">
            <FaTelegramPlane className="h-[22px] w-[22px]" fill="#ffffff" />
          </div>
        </Link>
        <Link href="https://www.instagram.com/getfreemerch.io/">
          <div className="rounded-full cursor-pointer max-w-min instagram p-[13px] mt-5">
            <BsInstagram className="h-[22px] w-[22px]" fill="#ffffff" />
          </div>
        </Link>
      </div>
  </div>
}

const NewComponent = () => (
  <Layout className="h-full 
    flex-1 bg-grey-100 dark:bg-blue-900 
    py-10 px-10 md:px-24 text-grey-300 
    dark:text-grey-400 overflow-y-hidden
  ">
    <ContactUs />
  </Layout>
)

export default NewComponent;
