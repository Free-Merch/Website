import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import LoadingDark from "../../assets/pictures/form-loading-dark.png"
import Loading from "../../assets/pictures/form-loading-white.png";
import Failed from "../../assets/pictures/form-submit-failed.svg";
import Success from "../../assets/pictures/form-submit-success.svg";
import { Button } from "../buttons";
import useTheme from "../../hooks/useTheme";

const FormSubmitModal = () => {
  const {theme} = useTheme();
  const {modals, hide} = useContext(ModalContext)
  const open = modals.submitForm.open
  const state = modals.submitForm.progress
  const retry = modals.submitForm.call;

  const close = () => {
    hide("submitForm");
  }

  const components = {
    "Sent": {text: "Successful", subText: "Your entry has been recorded.", buttonText: "Close", image: Success},
    "Sending": {text: "Please wait", subText: "Your entry is being recorded.", buttonText: "", image: theme === "light" ? Loading : LoadingDark},
    "Failed": {text: "Failed", subText: "Submission failed.", buttonText: "Retry", image: Failed},
  }

  const cp = components[state ?? "Sending"];
  
  return open ? <div className="fixed  px-12 flex justify-center items-center scrollbar-hide z-[100] w-full h-full bg-[rgb(0,0,0,0.5)]">
    <div onClick={(e) => e.stopPropagation()} className="relative flex-wrap flex-col bg-blue-900 flex justify-center items-center max-h-screen h-[600px] max-w-[600px] w-full mx-4">
      <Image src={cp.image} alt="successful" layout="fixed" className={`${state === "Sending" ? "animate-spin" : ""} w-[150px] h-[150px]`} />
      <p className="mt-[36px] font-semibold text-white text-lg">{cp.text}</p>
      <p className="text-md mt-[8px] text-white mb-[20px]">{cp.subText}</p>
      {cp.buttonText && <Button 
        onClick={state === "Sent" ? close : retry}
        className={`w-[156px] h-[46px] text-white flex items-center ${state === "Sent" ? "bg-green-100" : "bg-red-150"} justify-center`}>{cp.buttonText}</Button>}
    </div>
  </div> : <></>
}

export default FormSubmitModal;
