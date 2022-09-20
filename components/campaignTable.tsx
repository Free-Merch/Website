import { ReactNode, useEffect, useState } from "react";
import { ImageType } from "../types";
import Table, { MobileTable } from "./table";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import {horizontalLabel} from "./labels"
import { useWindowSize } from "../hooks/useSize";

interface Props {
  tableHeaders: string[]
  mobileTableHeaders: string[]
  rows: ReactNode[][]
  images: ImageType[]
  show: (modal: any, options: {}) => void
  name: string
  active: boolean
  _key: number
}

const CampaignTable = (props: Props) => {
  const {rows, images, show, tableHeaders, mobileTableHeaders, name, active, _key} = props;

  const [open, setOpen] = useState(false);
  const {width} = useWindowSize();

  useEffect(() => {
    if(_key === 0){
      setOpen(true)
    }
  }, [_key])

  return  <div className={`mt-5 md:px-[50px] ${!open ? "md:py-[10px]" : "md:py-[30px]"} px-[24px] py-[19px] bg-white dark:bg-blue-400 rounded-lg`}>
        <div className={`cursor-pointer flex items-center font-semibold text-black-900 dark:text-white text-xl 
          ${open && "border-b-[0.5px] border-b-[#667085] pb-1"}`}
          onClick={() => setOpen(!open)}
        > 
          <>
            { name }
            {open ? <RiArrowUpSFill  />: <RiArrowDownSFill />}
            &nbsp;
            {active && horizontalLabel}
          </>
        </div>
        {open && <div >
          <div className={ `${width < 870 && "hidden"} block`}>
            <Table 
              headers={tableHeaders} 
              onClick={(image) => show("merch", {picture: image})}
              rows={rows}
              images={images}
            />
          </div>
          <MobileTable 
              onClick={(image) => show("merch", {picture: image})}
            className={`${width > 870 && "hidden"} `}
            headers={mobileTableHeaders} 
            rows={rows}
            images={images}  
          />
        </div>}
      </div>
}

export default CampaignTable;
