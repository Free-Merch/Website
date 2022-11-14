import Image from "next/image";
import Link from "next/link";
import Splash from "../assets/pictures/splash.png"

const Banner = () => <Link href="/campaigns" passHref> 
  <a>
  <div className="text-white cursor-pointer bg-blue-400 dark:bg-green-100 flex justify-center items-center h-10 w-full">
    <Image src={Splash} alt="logo" layout="fixed" width={19} height={19}/> 
    &nbsp; Free merch giveaway is ongoing, get Access 
  </div>
  </a>
</Link>

export default Banner;