import Image from "next/image";
import { useContext } from "react";
import {IoCloseSharp} from "react-icons/io5";
import { ModalContext } from "../../context/modalContext";
import {useWindowSize} from "../../hooks/useSize";

const MerchModal = () => {
  const {modals, hide} = useContext(ModalContext)
  const open = modals.merch.open
  const picture = {...modals.merch.picture}
  picture.ratio = picture.width && picture.height ? picture.width/picture.height : 1;
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const imageWidth = windowWidth <= 700 ? 250 : 500;
  let imageHeight = picture?.ratio ? imageWidth/picture?.ratio : 0;
  const maxHeight = 0.85 * windowHeight
  imageHeight = imageHeight > maxHeight ? maxHeight : imageHeight;
  return open ? <div onClick={() => hide("merch")} className="cursor-zoom-out fixed px-12 flex justify-center items-center scrollbar-hide z-[100] w-full h-full bg-[rgb(0,0,0,0.5)]">
    <div className="relative flex ">
        {picture && <Image objectFit="cover" src={picture?.url ?? ""} alt="merch_image" className="merch_modal_image" layout="fixed" width={imageWidth} height={imageHeight}/>}
      <div onClick={() => hide("merch")} className="cursor-pointer ml-2 h-min w-min rounded-full bg-white dark:bg-blue-400">
        <IoCloseSharp className="dark:text-white text-blue-400 text-2xl md:text-4xl"/>
      </div>
    </div>
  </div> : <></>
}

export default MerchModal;
