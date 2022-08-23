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

  return  <div className="mt-5 md:px-[50px] md:py-[22px] px-[24px] py-[30px] bg-white dark:bg-blue-400 rounded-lg">
        <h3 className={`cursor-pointer flex items-center font-bold text-black-900 dark:text-white text-xl`}
          onClick={() => setOpen(!open)}
        > 
          <>
            { name }
            {open ? <RiArrowUpSFill  />: <RiArrowDownSFill />}
            &nbsp;
            {active && horizontalLabel}
          </>
        </h3>
        {open && <div className=" md:py-[30px] py-[21px]">
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
