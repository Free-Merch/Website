import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import {IoCloseSharp} from "react-icons/io5";
import { ModalContext } from "../../context/modalContext";
import {useWindowSize} from "../../hooks/useSize";

const MerchModal = () => {
  const {modals, hide} = useContext(ModalContext)
  const open = modals.merch.open
  const picture = modals.merch.picture
  const { width: windowWidth } = useWindowSize();

  const imageWidth = windowWidth <= 700 ? 250 : 500;

  return open ? <div className="fixed px-12 flex justify-center scrollbar-hide z-[100] w-full h-full bg-[rgb(0,0,0,0.5)]">
    <div className="relative mt-48 flex ">
        {picture && <Image src={picture?.url} alt="merch_image" className="merch_modal_image" layout="fixed" width={imageWidth} height={imageWidth/picture.ratio}/>}
      <div onClick={() => hide("merch")} className="cursor-pointer ml-2 h-min w-min rounded-full bg-white dark:bg-blue-400">
        <IoCloseSharp className="dark:text-white text-blue-400 text-2xl md:text-4xl"/>
      </div>
    </div>
  </div> : <></>
}

export default MerchModal;
