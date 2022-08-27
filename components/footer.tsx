import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import Logo from "../assets/pictures/logo.png";
import Image from "next/image";


const Footer = () => (
  <>
  <div className="absolute w-full flex
    bottom-5
    px-[12px] md:px-24
    flex-col sm:flex-row
    dark:text-white
  text-blue-400 bg-grey-100 dark:bg-blue-900
    items-center sm:items-start
    sm:justify-between
    gap-2
  "
  >
    <h3 className="font-black flex items-center">
      <Image src={Logo} alt="logo" /><span className="font-normal">Free</span>Merch
    </h3>
    <div className="space-x-4 flex items-center">
      <a href="https://twitter.com/getFreemerch"><AiOutlineTwitter className="w-5 h-5" /></a>
      <a href="https://t.me/getfreemerch"><FaTelegramPlane className="w-5 h-5" /></a>
      <a href="https://www.instagram.com/getfreemerch.io/"><AiOutlineInstagram className="w-5 h-5" /></a>
    </div>
    <div className="text-center sm:text-right">
      © 2022. All rights reserved.
    </div>
  </div>
  </>
)

export default Footer;