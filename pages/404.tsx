import Layout from "../components/layout";
import Image from "next/image";
import useBrands from "../hooks/useBrands";
import { ProjectCard } from "../components/cards/project-card";
import {HiOutlineExclamation} from "react-icons/hi";

const CatchPage = () => {
  let brands = useBrands()
  brands = brands?.slice(0, 3);
  const BrandCards = brands?.map((brand, index) => {
  const { about, logo, campaigns, brand: name, logoBgColor, id } = brand;
    return <ProjectCard  
        brand={name}
        image={logo}
        about={about}
        bgColor={logoBgColor}
        campaigns={campaigns}
        id={id}
        key={index}
      />
  })

  return <div className="text-center relative overflow-hidden">
    <div className="relative w-[301px] h-[195px] mx-auto mb-[40px]">
      <Image className="dark-404" src="https://res.cloudinary.com/freemerchcloudinary/image/upload/v1661498127/Illustration_dark_nsqxhu.svg" layout="fill" alt="free merch logo" />
      <Image className="light-404" src="https://res.cloudinary.com/freemerchcloudinary/image/upload/v1661498127/Illustration_rlluvt.svg" layout="fill" alt="free merch logo" />
    </div>
    <div className="mt-2 flex max-w-fit px-[17px] py-[3px] items-center mx-auto bg-[#FEF2F2] rounded-md text-[#991B1B] justify-center"><HiOutlineExclamation /> &nbsp;  404 Error</div>
    <h3 className="mt-[13px] text-3xl dark:text-white text-[#191D23] font-semibold ">Page not Found</h3>
    <p className="mb-[45px] mt-[26px] text-lg dark:text-white text-[#64748B]">Sorry, the page you are looking for doesn’t exist or has been removed. Keep exploring out site: </p>
    <div className="child:m-3 flex flex-wrap justify-center mb-10">
      {BrandCards}
    </div>
  </div>
}

const NewComponent = () => (
  <Layout className="
    h-full 
    flex-1 bg-grey-100 dark:bg-blue-900 
    py-10 px-[12px] md:px-24
    text-blue-400 dark:text-white overflow-y-hidden"
  >
    <CatchPage />
  </Layout>
)

export default NewComponent;
