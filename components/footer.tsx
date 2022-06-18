import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import {TbBrandTelegram} from "react-icons/tb";


const Footer = () => (
  <div className="flex text-white justify-between flex-wrap text-center child:mb-5 mx-auto">
    <h3 className="font-black mx-auto">FreeMerch</h3>
    <div className="flex space-x-4 child:h-4 mx-auto items-center px-2">
      <AiOutlineTwitter />
      <AiOutlineInstagram />
      <TbBrandTelegram />
    </div>
    <div className="mx-auto">
      © 2022. All rights reserved.
    </div>
  </div>
)

export default Footer;