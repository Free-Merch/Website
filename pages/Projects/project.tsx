import Image from "next/image";
import Layout from "../../components/layout";

// pictures
import BinanceText from "../../assets/pictures/binance_text.png";
import BlackShirt from "../../assets/pictures/black-shirt.png";
import WhiteCap from "../../assets/pictures/white-cap2.png";
import WhiteBook from "../../assets/pictures/whiteback-book.png";

import Table from "../../components/table";
import { v4 } from "uuid";
import { ProjectCard } from "../../components/cards/project-card";
import { GreenButton } from "../../components/buttons";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import { MobileTable } from "../../components/table";

import {BiLinkAlt} from "react-icons/bi"
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const TableHeaders = [
  "Item", "Name", "Quantity", "Shared", "Percentage", "Status", "Task"
]

const TableData = [
  {
    item: BlackShirt, name: "Wears", quantity: 2000, shared: 800
  },
  {
    item: WhiteCap, name: "Cap", quantity: 800, shared: 800
  }
]

const TableRows = TableData.map(row => {
  const {shared, quantity, item, name} = row;
  const percentage = parseInt((shared/quantity * 100).toString());
  const status = shared === quantity ? "Completed" : "Ongoing";
  const task = shared === quantity ? "Completed" : "Request";

  return [
    <Image key="1" className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" src={item} alt="shirt" layout="fixed" width={"32px"} height={"32px"}/>,
    <span key={v4()}>{name}</span>,
    <span key={v4()} className="text-grey-700 override-weight">{quantity}</span>,
    <span key={v4()} className="text-grey-700 override-weight">{shared}</span>,
    <div key={v4()} className="h-[20px] flex items-center">
      <div className="w-16 h-2 bg-grey-400 mx-auto relative text-left rounded-lg" key={v4()}>
        <div 
          style={{
            width: `${percentage}%`
          }}
          className={`
            h-2
            rounded-lg
            inline-block
            ${status === "Completed" ? "bg-[#7174FF]" : "bg-green-100"}
          `}
          >
          &nbsp;
        </div>
        <span className="text-black-900  absolute right-0 top-1/2 -translate-y-1/2 text-[5px] leading-[5px] font-medium">{percentage}%</span>
      </div>
    </div>,
    <span key={v4()} className={`cursor-default inline-block ${status === "Completed" ? "text-[#7174FF]" : "text-green-100"}`}>{status}</span>,
    <span key={v4()} className={`inline-block p-2 rounded-[30px] 
      ${status === "Completed" ? "text-[#7174FF] bg-[#E7E7FF]" : "text-green-100 bg-[#E8FADF] cursor-pointer"}`}>{task}</span>,
  ]
});


const Project = () => {
  const { show } = useContext(ModalContext);

  return <>
    <div className="bg-grey-200 dark:bg-blue-800 -mx-10 md:-mx-24 px-10 md:px-24">
      <div className="w-full max-w-[1252px] mx-auto">
        <div className={`translate-y-1/2 bg-blue-400 shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)] rounded-lg h-[100px] w-[100px] flex items-center justify-center`}>
          <Image src={BinanceText} className="mx-24" alt={"Binance"} />
        </div>
      </div>
    </div>

    <div className="mt-16 mb-28 max-w-[1252px] mx-auto">
      <h2 className="font-bold flex justify-between items-center text-blue-400 dark:text-white text-xl">
        Binance
        <span className="flex text-blue-900 text-[19px] dark:text-white">
          <BsTwitter className="cursor-pointer"/>
          &nbsp;
          <BiLinkAlt className="cursor-pointer"/>1
          
        </span>
      </h2>
      <p className="text-grey-300 dark:text-grey-700 max-w-[569px] text-sm">
        Lorem ipsum dolor sitascad, cdjcdccdaamet, consectetg elit ut aliquam, 
        purus sitmet luctus venenatis, lectusagna fringilla urna, porttitorhoncus dolor purus non enim
      </p>
      <p className="text-black-900 font-medium text-xs dark:text-white mt-4">Item:</p>
      <div className="flex mt-2 child:mr-3 child:inline-block rounded-md child:cursor-pointer">
        <div>
          <Image onClick={() => show("merch")} className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" 
          src={BlackShirt} alt="shirt" layout="fixed" width={"60px"} height={"60px"}/>
        </div>
        <div>
          <Image onClick={() => show("merch")} className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" 
          src={WhiteCap} alt="cap" layout="fixed" width={"60px"} height={"60px"}/>
        </div>
        <div>
          <Image onClick={() => show("merch")} className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" 
          src={WhiteBook} alt="book" layout="fixed" width={"60px"} height={"60px"}/>
        </div>
      </div>

      <div className="mt-10 mb-20">
        <h3 className="font-bold text-black-900 dark:text-white text-xl mb-4">Active</h3>
        <div className="hidden md:block">
          <Table 
            headers={TableHeaders} rows={TableRows}
          />
        </div>
        <MobileTable className="md:hidden" headers={TableHeaders} rows={TableRows}/>
      </div>

      <div>
        <h3 className="font-bold text-black-900 dark:text-white text-xl mb-4">Completed</h3>
        <div className="hidden md:block">
          <Table  
            headers={TableHeaders} rows={[TableRows[1]]}
          />
        </div>
        <MobileTable className="md:hidden" headers={TableHeaders} rows={[TableRows[1]]}/>
      </div>

      <div className="mt-40">
        <h3 className="font-bold text-black-900 dark:text-white text-lg mb-4">Active</h3>
        <div className="child:m-2 flex flex-wrap justify-center mb-10">
          <ProjectCard type="binance" />
          <ProjectCard type="mexc"/>
          <ProjectCard type="binance" />
          <ProjectCard type="mexc"/>
        </div>
      </div>
      <GreenButton href="/projects" className="py-2 px-4 mx-auto block max-w-max">View All</GreenButton>
    </div>
  </>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-10 text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Project />
  </Layout>
);

export default NewComponent;