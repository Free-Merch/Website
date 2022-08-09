import Layout from "../components/layout";
import Logo from "../assets/pictures/logo.png"
import Image from "next/image";
import { GreenButton } from "../components/buttons";

const CatchPage = () => {

  return <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <Image src={Logo} width={24} height={24} alt="free merch logo" />
    <p className="mt-[20px] mb-[14px] leading-[76px] text-[60px] font-semibold">404</p>
    <p className="mb-[45px] text-lg">This Page is outside the server </p>
    <GreenButton>Back Home</GreenButton>
  </div>
}

const NewComponent = () => (
  <Layout className="
    h-full 
    flex-1 bg-grey-100 dark:bg-blue-900 
    py-10 px-10 md:px-24
    text-blue-400 dark:text-white overflow-y-hidden"
    mainClass="flex flex-col"
  >
    <CatchPage />
  </Layout>
)

export default NewComponent;
