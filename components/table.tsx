import { ReactNode, useState } from "react";
import {v4 } from "uuid";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { ImageType } from "../types";
import { useWindowSize } from "../hooks/useSize";


interface TData {
  headers : string[];
  rows: ReactNode[][];
  onClick: (image:ImageType) => void
  images: ImageType[]
  className?: string;
}

const upRows = [0, 1, 5, 6];

export const MobileTable = (data: TData) => {
  const {rows:_rows, className, headers: _headers, onClick: _onClick, images} = data;
  const [openRows, setOpenRows] = useState(Array(_rows.length).fill(false));

  const handleSetOpenRows = (index: number, open: boolean) => {
    const _openRows = [...openRows]
    _openRows[index] = open;
    setOpenRows(_openRows);
  }

  const headers = <div className="w-full rounded-t-lg flex">
    {_headers.slice(0,4).map(header => {
      return <div className="w-1/4 text-sm font-medium pt-5 pb-3 text-grey-300" key={v4()}>
        {header}
      </div>
    })}
  </div>


  let rows: JSX.Element[] = [];
  _rows.forEach((row, index1) => {
    rows.push(
      <div key={v4()} 
        className={`flex items-center bg-white border border-transparent 
          dark:bg-blue-400 mb-[29px]
          `
        }
      >
        {row.map((ele,index2) => {
          if(upRows.includes(index2)){
            return <div className=" w-1/2" key={index2}>
              <>
                {index2 === 1 ? 
                  <span className="!font-medium">{ele} </span> : 
                  <span className="cursor-pointer" onClick={index2 === 0 ? () => _onClick(images[index1]) : () => {}}>{ele}</span>
                }
                <br />
                <span className="flex items-center text-[10px] 
                  w-full cursor-pointer "
                  onClick={() => {
                    handleSetOpenRows(index1, !openRows[index1])
                  }}
                >
                  {index2 === 1 && 
                    ( openRows[index1] ? 
                      <><RiArrowUpSFill className="inline text-lg" /> Less</> :
                      <><RiArrowDownSFill className="inline text-lg" /> More</>
                    )
                  }
                </span>
              </>
            </div>
          }
        })}
      </div>
    );

    if(!openRows[index1]) return;

    rows.push(
      <div key={v4()} className={`flex items-center mb-[29px] bg-white dark:bg-blue-400 `}>
      {row.map((ele, index2) => {
        if(!upRows.includes(index2)){

          return <div className="w-1/3" key={index2}>
                <span className="text-grey-300">{_headers[index2]}</span>
              <br />
              <span className={`${index2 !== row.length-1 && "!text-blue-400 !font-medium"} `}>
                {ele}
              </span>
            </div>
          }
        })}
      </div>
    )
  });
  

  return <div className={`${className} mobile-table `}>
    {headers}
    {rows}
  </div>
}

const Table = (data: TData) => {
  const {rows: _rows, className, onClick: _onClick, images} = data;
  const {width: windowWidth} = useWindowSize();

  const rows = _rows.map((row, index1) => {
    return <tr 
      key={index1} 
      className={`h-[70px] dark:bg-blue-400 bg-white`}>
      {row.map((ele,index2) => {
        return <td className={`text-left ${index2 === 0 && "cursor-pointer"}`} onClick={index2 === 0 ? () => _onClick(images[index1]) : () => {}} key={index2}>
          <div className={`${windowWidth > 1150 && "flex"}`}>
            {ele} 
          </div>
        </td>
      })}
    </tr>
  })

  const headerWidth = 100/data.headers.length;
  const maxWidth = headerWidth - (10/data.headers.length);
  const header = data.headers.map((title, index) => 
    <th 
      className={`text-grey-300 text-left w-[${headerWidth}]% lg:w-[${maxWidth}]% text-sm font-medium pt-2 pb-3`} 
      key={index}>
      {title}
    </th>
  );

  return <table className={`${className} table-fixed w-full border-collapse text-sm`}>
    <thead className="dark:text-white rounded-t-lg">
      <tr className="">
        {header}
      </tr>
    </thead>
    <tbody >
      {rows}
    </tbody>
  </table>
}

export default Table;