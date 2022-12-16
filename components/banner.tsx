import Image from "next/image";
import Link from "next/link";
import Splash from "../assets/pictures/splash.png"

const Banner = () => <Link href="/campaigns" passHref> 
  <a className="w-full block py-1 bg-blue-400 dark:bg-green-100 text-center">
  <span className="text-white cursor-pointer h-10 w-full">
    <Image className="self-center translate-y-px inline-block" src={Splash} alt="logo" layout="fixed" /> 
    &nbsp; Free merch giveaway is ongoing, get Access 
  </span>
  </a>
</Link>

export default Banner;