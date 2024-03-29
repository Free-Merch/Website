import Banner from "./banner";
import Footer from "./footer";
import {DesktopNav, MobileNav} from "./navigation";
import { useContext, useState } from "react";
import ModalContextProvider, { ModalContext } from "../context/modalContext";
import ApolloContextProvider from "../context/apolloContext";
import { useRouter } from "next/router";
import ThemeContextProvider from "../context/themeContext";
import Head from "next/head";


const Layout = ({children, mainClass, ...others}: {[key:string]: any}) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  others.className = `relative ${others.className}`;
  const { pathname } = useRouter();
  const modalContext = useContext(ModalContext);
  const modalOpen = Object.values(modalContext.modals).map(obj => obj.open).includes(true);

  const openMobileNav = (open: boolean) => {
    setOpenNav(open);
  }

  return <div className={`
      ${ pathname.toLowerCase() === "/contact-us".toLowerCase() && "flex flex-col" }
      ${mainClass}
      relative pb-[60px] min-h-screen bg-grey-100 dark:bg-blue-900`
    }>  
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@nonseodion" />
        <meta name="twitter:site" content="@getfreemerch" />
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
      <ThemeContextProvider>
        <Layout {...props} />
      </ThemeContextProvider>
    </ModalContextProvider>
  </ApolloContextProvider>
)
export default Component;