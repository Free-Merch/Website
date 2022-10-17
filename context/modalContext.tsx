import React, { ReactNode, useState, createContext } from "react";
import FormSubmitModal from "../components/modals/formSubmitModal";
import MerchModal from "../components/modals/merchModal";
import { ImageType } from "../types";

type ModalObj = {
  merch: {open: boolean, picture?: ImageType},
  submitForm: {open: boolean, progress?: "Sent"|"Sending"|"Failed", call?: () => void},

}

const initialModals: ModalObj = {
  merch: {open: false},
  submitForm: {open: false, progress: "Sending", call: () => {}},
}

export const ModalContext = createContext({
  modals: initialModals, 
  show: <T extends keyof ModalObj>(modal: T, options: ModalObj[T]) => {}, 
  hide: (modal: keyof ModalObj) => {}  }
);

const ModalContextProvider = ({children}: {children: ReactNode}) => {
  const [modals, setModals] = useState<ModalObj>(initialModals); 
  const handle = <T extends keyof ModalObj>(modal: T, props: ModalObj[keyof ModalObj]) => {
    const modalNames = Object.keys(modals);
    if(!modalNames.includes(modal)) throw new Error("Not a valid modal");
    const _modals = {...modals};
    _modals[modal] = {..._modals[modal], ...props};
    setModals(_modals);
  }

  const show: <T extends keyof ModalObj>(modal: T, options: ModalObj[T]) => void =
  (modal, options) => {
    handle(modal, options);
  }

  const hide = (modal: keyof ModalObj) => {
    handle(modal, {open: false});
  }

  return <ModalContext.Provider value={{show, hide, modals}}>
    <MerchModal />
    <FormSubmitModal />
    {children}
  </ModalContext.Provider>
}

export default ModalContextProvider;