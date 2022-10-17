import Image from "next/image";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../context/modalContext";
import LoadingDark from "../../assets/pictures/form-loading-dark.png"
import Loading from "../../assets/pictures/form-loading-white.png";
import Failed from "../../assets/pictures/form-submit-failed.svg";
import Success from "../../assets/pictures/form-submit-success.svg";
import { Button } from "../buttons";
import useTheme from "../../hooks/useTheme";
import Link from "next/link";

const FormSubmitModal = () => {
  const {theme} = useTheme();
  const {modals, hide} = useContext(ModalContext)
  const open = modals.submitForm.open
  let state = modals.submitForm.progress
  const retry = modals.submitForm.call;
  const close = () => {
    hide("submitForm");
  }

  const components = {
    "Sent": {text: "Successful", subText: "Your entry has been recorded.", buttonText: "View Campaigns", image: Success},
    "Sending": {text: "Please wait", subText: "Your entry is being recorded.", buttonText: "", image: theme === "light" ? Loading : LoadingDark},
    "Failed": {text: "Failed", subText: "Submission failed.", buttonText: "Retry", image: Failed},
  }

  const cp = components[state ?? "Sending"];
  
  return open ? <div className="fixed  md:px-12 flex justify-center items-center scrollbar-hide z-[100] w-full h-full bg-[rgb(0,0,0,0.5)]">
    <div onClick={(e) => e.stopPropagation()} className="relative flex-wrap flex-col bg-blue-900 flex justify-center items-center max-h-screen h-[600px] max-w-[600px] w-full mx-4">
      <Image src={cp.image} alt="successful" layout="fixed" className={`${state === "Sending" ? "animate-spin" : ""} w-[150px] h-[150px]`} />
      <p className="mt-[36px] font-semibold text-white text-lg">{cp.text}</p>
      <p className="text-md mt-[8px] text-white mb-[20px]">{cp.subText}</p>
      {state !== "Sending" ? (state === "Failed" ? <div className="flex gap-4">
          <Button 
          onClick={retry}
          className={`w-[156px] h-[46px] text-white flex items-center bg-green-100 justify-center`}>Retry</Button>
          <Button 
          onClick={close}
          className={`w-[156px] h-[46px] text-white flex items-center bg-red-150 justify-center`}>Close</Button>
          </div>
        :
        <Link  href="/campaigns">
          <span className={`w-[183px] cursor-pointer h-[46px] text-white px-[4px] flex justify-center items-center rounded-[5px] bg-green-100`}>See all Campaigns</span>
        </Link>) : <></>
      }
      
    </div>
  </div> : <></>
}

export default FormSubmitModal;
