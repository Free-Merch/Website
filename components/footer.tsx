import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/Fa";
import Logo from "../assets/pictures/logo.png";
import Image from "next/image";


const Footer = () => (
  <div className="h-[55px] mb-5 absolute bottom-0 w-full flex
    px-4 
    dark:text-white justify-between items-center flex-wrap 
    mx-auto text-blue-400 bg-grey-100 dark:bg-blue-900"
  >
    <h3 className="font-black mx-auto flex items-center">
      <Image src={Logo} alt="logo" /><span className="font-normal">Free</span>Merch
    </h3>
    &nbsp;
    <div className="flex space-x-4 mx-auto items-center px-2">
      <a href="https://twitter.com/getFreemerch"><AiOutlineTwitter className="w-5 h-5" /></a>
      <a href="https://t.me/getfreemerch"><FaTelegramPlane className="w-5 h-5" /></a>
      <a href="https://www.instagram.com/getfreemerch.io/"><AiOutlineInstagram className="w-5 h-5" /></a>
    </div>
    &nbsp;
    <div className="mx-auto">
      © 2022. All rights reserved.
    </div>
  </div>
)

export default Footer;