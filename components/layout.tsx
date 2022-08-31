import Head from "next/head";
import Banner from "./banner";
import Footer from "./footer";
import {DesktopNav, MobileNav} from "./navigation";
import { useContext, useEffect, useState } from "react";
import ModalContextProvider, { ModalContext } from "../context/modalContext";
import ApolloContextProvider from "../context/apolloContext";
import { useRouter } from "next/router";
import TagManager from 'react-gtm-module';


const Layout = ({children, mainClass, ...others}: {[key:string]: any}) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  others.className = `relative ${others.className}`;
  const { pathname } = useRouter();
  const modalContext = useContext(ModalContext);
  const modalOpen = Object.values(modalContext.modals).map(obj => obj.open).includes(true);

  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-5RWRHZ2' });
  }, []);

  const openMobileNav = (open: boolean) => {
    setOpenNav(open);
  }

  return <div className={`
      ${ pathname.toLowerCase() === "/contact-us".toLowerCase() && "flex flex-col" }
      ${mainClass}
      relative pb-[60px] min-h-screen bg-grey-100 dark:bg-blue-900`
    }>
      <Head>
        <title>FreeMerch</title>
        <meta name="description" content="Get Free Merch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed z-10 w-full">
        <Banner />
        <DesktopNav openMobileNav={openMobileNav} mobileNavOpen={openNav}/>
      </div>
      {/* <div className="w-full mb-32"></div> */}
        {/* mobile Nav */}

        {/* page content */}
        <div {...others}>
          <div className="mt-20"></div>
          <MobileNav open={openNav} />
          {/* <div className="mt-32"></div> */}
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      {(!openNav && !modalOpen) && <Footer />}
    </div>
}

const Component = (props: any) => (
  <ApolloContextProvider>
    <ModalContextProvider>
      <Layout {...props} />
    </ModalContextProvider>
  </ApolloContextProvider>
)
export default Component;