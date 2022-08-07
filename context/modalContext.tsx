import React, { ReactNode, useState, createContext } from "react";
import MerchModal from "../components/modals/merchModal";
import { ImageType } from "../types";

type ModalObj = {
  merch: {open: boolean, picture?: ImageType},
}

const initialModals: ModalObj = {
  merch: {open: false}
}

export const ModalContext = createContext({
  modals: initialModals, 
  show: (modal: keyof ModalObj, ..._:any) =>{}, 
  hide: (modal: keyof ModalObj) => {}  }
);

const ModalContextProvider = ({children}: {children: ReactNode}) => {
  const [modals, setModals] = useState<ModalObj>(initialModals); 
  const handle = (modal:keyof ModalObj, state: boolean, props?: {[key:string]: any}) => {
    const modalNames = Object.keys(modals);
    if(!modalNames.includes(modal)) throw new Error("Not a valid modal");
    const _modals = {...modals};
    _modals[modal] = {..._modals[modal], open: state, ...props}
    setModals(_modals);
  }

  const show = (modal: keyof ModalObj, props: any) => {
    handle(modal, true, props);
  }

  const hide = (modal: keyof ModalObj) => {
    handle(modal, false);
  }

  return <ModalContext.Provider value={{show, hide, modals}}>
    <MerchModal />
    {children}
  </ModalContext.Provider>
}

export default ModalContextProvider;