import { ReactNode, useState } from "react";
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
}

const CampaignTable = (props: Props) => {
  const {rows, images, show, tableHeaders, mobileTableHeaders, name, active} = props;

  const [open, setOpen] = useState(false);
  const {width} = useWindowSize();

  return  <div className="mt-5 px-[10px] py-[10px] bg-white dark:bg-blue-400 rounded-lg">
        <h3 className={`cursor-pointer flex items-center font-bold text-black-900 dark:text-white text-xl  ${open && "pb-[10px] mb-[10px] border-b-[0.5px] border-b-grey-300"}`}
          onClick={() => setOpen(!open)}
        > 
          <>
            { name }
            {open ? <RiArrowUpSFill  />: <RiArrowDownSFill />}
            &nbsp;
            {active && horizontalLabel}
          </>
        </h3>
        {open && <div className="md:px-[40px] px-[28px] md:py-[30px] py-[21px]">
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
            className={`${width > 870 && "hidden"} -mx-10 `}
            headers={mobileTableHeaders} 
            rows={rows}
            images={images}  
          />
        </div>}
      </div>
}

export default CampaignTable;
