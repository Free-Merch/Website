import Image from "next/image";
import Splash from "../assets/pictures/splash.png"

const Banner = () => <div className="text-white bg-green-100 flex justify-center items-center h-10 w-full">
  <Image src={Splash} alt="logo" layout="fixed" width={19} height={19}/> &nbsp; Free merch is ongoing, get Access 
</div>

export default Banner;