import {v4 as uuid} from "uuid";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../assets/pictures/logo.png";
import {HiOutlineMoon, HiSun} from "react-icons/hi";
import {RiMoonFill} from "react-icons/ri";
import { useThemeContext } from "../hooks/contexthooks";

interface INav {
  openMobileNav: (_:boolean) => void
  mobileNavOpen: boolean
}

const links = [
  {path: "/", text: "Home"},
  {path: "/campaigns", text: "Campaigns"},
  {path: "/brands", text: "Brands"},
  {path: "/about-us", text: "About us"},
  {path: "/contact-us", text: "Contact us"}
]


// file contains only desktop nav
export const DesktopNav = (props: INav) => {
  const {pathname} = useRouter();
  const {theme, setTheme} = useThemeContext();
  const {openMobileNav, mobileNavOpen} = props;
  const checkPath = "/" + pathname.split("/")[1].toLowerCase();

  const navLinks = links.map(({path, text}) => {
    return <li className={`whitespace-nowrap cursor-pointer hover:text-green-100 ${checkPath === path.toLowerCase() && "text-green-100"}`} key={uuid()}>
      <Link href={path} ><span className="font-semibold text-base">{text}</span></Link>
      <div className={`border-b-1px ${checkPath === path.toLowerCase() ? "border-green-100 w-1/2" : "w-0"}`} />
    </li>
  })

  return <div className="px-[12px] md:px-24 bg-grey-100 dark:bg-blue-900">
    <div className="flex max-w-7xl mt-[25px] mb-[10px] mx-auto justify-between text-blue-400 dark:text-white">
      <h3 className="mr-12 lg:mr-20 font-black flex "> <Image src={Logo} alt="logo" layout="fixed" width={"21px"} height={"21px"}/> <span className="font-normal">Free</span>Merch</h3>
      
      <div className="hidden md:flex justify-between w-full">
        <ul className="mx-4 gap-[10px] max-w-[720px] flex-wrap md:w-full desk-nav-mid:gap-[15px] md:gap-[30px] md:flex items-center">
          {navLinks}
        </ul>
        <div className="">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-end cursor-pointer">
            {theme === "dark" ?
              <HiSun className={`rounded-full hover:text-green-100 text-grey-800}`} size={25}/> 
              :
              <RiMoonFill className={`rounded-full hover:text-green-100 text-blue-800 }`} size={25}/>
            }
          </button>
        </div>
      </div>

      <button 
        className={`
          flex flex-col relative md:hidden w-6 
          ${mobileNavOpen ? "items-end" : "items-end"} h-6 
          justify-between child:transition-all
          child:dark:bg-white
          child:bg-blue-400
          `
        } onClick={() => openMobileNav(!mobileNavOpen)}>
        <div className={`rounded border-2 border-blue-400 dark:border-white ${mobileNavOpen ? "w-full absolute -rotate-45 top-1/3" : "w-3/4"}`}></div>
        <div className={`rounded w-full border-2 border-blue-400 dark:border-white  ${mobileNavOpen && "hidden"}`}></div>
        <div className={`rounded border-2 border-blue-400 dark:border-white ${mobileNavOpen ? "w-full absolute rotate-45 bottom-2/4" : "static w-1/2"}`}></div>
      </button>

    </div>
  </div>
}

export const MobileNav = (props: {open:boolean}) => {
  const {open} = props;
  const {pathname} = useRouter();
  const {setTheme, theme} = useThemeContext();
  const checkPath = "/" + pathname.split("/")[1].toLowerCase();

  const navLinks = links.map(({path, text}, index) => {
    return <li className={`whitespace-nowrap font-semibold hover:text-green-100 ${checkPath === path.toLowerCase() ? "text-green-100" : "text-blue-400 dark:text-white"}`} key={index}>
      <Link href={path}>{text}</Link>
    </li>
  })

  return <div className={`pt-10 px-[12px] h-full left-0 fixed z-50 w-full 
    bg-grey-100 dark:bg-blue-900 dark:text-white text-base 
    font-medium transition-all ${!open && "-translate-x-full" }`
  }>
    <ul className="space-y-4 text-base">
      {navLinks}
    </ul>
    <div className="flex justify-between mt-3 items-center text-blue-400 dark:text-white">
      Dark mode 
      <div className="p-1 py-5 h-[30px] bg-grey-600 rounded-3xl flex items-center">
        <button className={`rounded-full ${theme === "light" && "bg-white"} p-2`} onClick={() => setTheme("light")}>
          <HiSun className={`rounded-full ${theme === "light" ? "text-green-100" : "text-grey-300"}`} size={18}/> 
        </button>
        &nbsp;
        <button className={`rounded-full ${theme === "dark" && "bg-white"}  p-2`} onClick={() => setTheme("dark")}>
          <HiOutlineMoon className={`rounded-full ${theme === "dark" ? "text-green-100" : "text-grey-300"}`} size={18}/>
        </button>
      </div>
    </div>
  </div>
}
