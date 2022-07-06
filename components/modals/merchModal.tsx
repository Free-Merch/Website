import Image, { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import {IoCloseSharp} from "react-icons/io5";
import HangerShirt from "../../assets/pictures/black_shirt_hanger.png";
import { ModalContext } from "../../context/modalContext";

const MerchModal = () => {
  const {modals, hide} = useContext(ModalContext)
  const open = modals.merch.open;

  return open ? <div className="absolute px-12 flex justify-center scrollbar-hide z-[100] w-full h-full bg-[rgb(0,0,0,0.5)]">
    <div className="relative mt-48">
      <Image src={HangerShirt} alt="merch_image"/>
      <div onClick={() => hide("merch")} className="cursor-pointer absolute rounded-full top-0 -right-5 md:-right-12 bg-white dark:bg-blue-400">
        <IoCloseSharp className="dark:text-white text-blue-400 text-2xl md:text-4xl"/>
      </div>
    </div>
  </div> : <></>
}

export default MerchModal;
