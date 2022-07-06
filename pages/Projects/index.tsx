import { ProjectCard } from "../../components/cards/project-card";
import Layout from "../../components/layout";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/IO"

import { useState } from "react";

const Projects = () => {
  
  const options = [
    {value: "Most recent", label: "Most recent"},
    {value: "A-Z", label: "A-Z"},
    {value: "Z-A", label: "Z-A"}
  ];

  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
  // @ts-ignore
  const handleSetOrder = (value: Option) => setOrder(value)

  return <div className="my-12">
    <div className="flex justify-between">
      <h1 className="text-3xl font-semibold text-black-900 dark:text-white">Projects</h1>
      
      <Dropdown 
        arrowClosed={ <IoIosArrowDown className="arrow" />}
        arrowOpen={<IoIosArrowUp className="arrow" />}
        value={order} options={options} onChange={handleSetOrder}  placeholder="Most recent" />
    </div>

    <div className="mt-7 mb-10 flex flex-wrap justify-center">
      <div className="mr-7"><ProjectCard type="binance" /></div>
      <div className="mr-7"><ProjectCard type="binance" /></div>
      <div className="mr-7"><ProjectCard type="binance" /></div>
    </div>

  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-10 text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Projects />
  </Layout>
);

export default NewComponent;