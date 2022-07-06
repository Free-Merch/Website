import { GreenButton, WhiteButton } from "../components/buttons";
import Layout from "../components/layout";
import { BsTwitter } from "react-icons/bs";

const ContactUs = () => {

  return <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <GreenButton className="px-8 py-2" >Company</GreenButton>
      <span className="block sm:inline-block">&nbsp; &nbsp;</span>
      <WhiteButton className="px-8 py-2 bg-white" >Individual</WhiteButton>
      <h1 className="text-blue-900 dark:text-white mt-20 font-semibold text-3xl">Follow Us</h1>
      <p className="text-blue-400 text-base dark:text-white">Follow us on Social Media</p>
      <div className="rounded-full max-w-min mx-auto bg-[#00acee] p-[13px] mt-5">
        <BsTwitter className="h-[22px] w-[22px]" fill="#ffffff" />
      </div>
  </div>
}

const NewComponent = () => (
  <Layout className="h-full flex-1 bg-grey-100 dark:bg-blue-900 py-10 px-10 md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <ContactUs />
  </Layout>
)

export default NewComponent;
