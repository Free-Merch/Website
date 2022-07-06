import Head from "next/head";
import Banner from "./banner";
import Footer from "./footer";
import {DesktopNav, MobileNav} from "./navigation";
import { useContext, useState } from "react";
import ModalContextProvider, { ModalContext } from "../context/modalContext";
import { useRouter } from "next/router";


const Layout = ({children, ...others}: {[key:string]: any}) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  others.className = `relative ${others.className}`;
  const { pathname } = useRouter();
  const modalContext = useContext(ModalContext);
  const modalOpen = Object.values(modalContext.modals).map(obj => obj.open).includes(true);

  const openMobileNav = (open: boolean) => {
    setOpenNav(open);
  }

  return <div className={`
      ${ (openNav || modalOpen) && "h-screen overflow-y-hidden" }
      ${ pathname.toLowerCase() === "/contact-us".toLowerCase() && "flex flex-col" }
      relative pb-[60px] min-h-screen bg-grey-100 dark:bg-blue-900`
    }>
      <Head>
        <title>FreeMerch</title>
        <meta name="description" content="Get Free Merch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <DesktopNav openMobileNav={openMobileNav} mobileNavOpen={openNav}/>
        {/* mobile Nav */}

        {/* page content */}
        <div {...others}>
          <MobileNav open={openNav} />
          {children}
        </div>
      {(!openNav && !modalOpen) && <Footer />}
    </div>
}

const Component = (props: any) => <ModalContextProvider>
    <Layout {...props} />
  </ModalContextProvider>

export default Component;