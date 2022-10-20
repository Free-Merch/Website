import {HiOutlineMail} from "react-icons/hi";
import {FaTelegramPlane} from "react-icons/fa";
import {BsTwitter, BsDiscord, BsInstagram, BsTelegram, BsFillHouseFill} from "react-icons/bs";

const formImages = {
  "twitter": (className: string) => <BsTwitter className={`${className}`}/>,
  "email": (className: string) => <HiOutlineMail className={`${className}`}/>,
  "instagram": (className: string) => <BsInstagram className={`${className}`} />,
  "telegram": (className: string) => <FaTelegramPlane className={`${className}`} />,
  "discord": (className: string) => <BsDiscord className={`${className}`}/>,
  "tweet": (className: string) => <BsTwitter className={`${className}`}/>,
  "house": (className: string) => <BsFillHouseFill className={`${className}`}/>,
}

export default formImages;