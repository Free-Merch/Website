import { ProjectCard, ProjectCardSkeleton } from "../../components/cards/project-card";
import Layout from "../../components/layout";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import useProjects from "../../hooks/useBrands";

import { useState } from "react";
import { BrandBrief } from "../../types";

const orderFunctions = {
  "A-Z": (projects: BrandBrief[]) => projects.sort((a, b) => a.brand[0] < b.brand[0] ? -1 : 1),
  "Z-A": (projects: BrandBrief[]) => projects.sort((a, b) => a.brand[0] > b.brand[0] ? -1 : 1),
  "Most recent": (projects: BrandBrief[]) => projects
}

const Projects = () => {
  
  const options = [
    {value: "Most recent", label: "Most recent"},
    {value: "A-Z", label: "A-Z"},
    {value: "Z-A", label: "Z-A"}
  ];

  const [order, setOrder] = useState({value: "Most recent", label: "Most recent"});
  // @ts-ignore
  const handleSetOrder = (value: Option) => setOrder(value)

  let projects = useProjects()
  const ProjectCards = orderFunctions[order.value as keyof typeof orderFunctions](projects)?.map((project, index) => {
    const { about, logo, campaigns, brand, logoBgColor, id } = project;
    return <ProjectCard  
        brand={brand}
        image={logo}
        about={about}
        bgColor={logoBgColor}
        campaigns={campaigns}
        id={id}
        key={index}
      />
  })

  const ProjectCardSkeletons = [<ProjectCardSkeleton key={1}/>, <ProjectCardSkeleton key={2} />, <ProjectCardSkeleton key={3} />, <ProjectCardSkeleton key={4} />]

  return <div className="my-12">
    <div className="flex justify-between pt-[50px]">
      <h1 className="text-[18px] md:text-3xl font-semibold text-black-900 dark:text-white">Projects</h1>
      
      <Dropdown 
        arrowClosed={ <IoIosArrowDown className="arrow" />}
        arrowOpen={<IoIosArrowUp className="arrow" />}
        value={order} options={options} onChange={handleSetOrder}  placeholder="Most recent" />
    </div>

    <div className="mt-7 mb-10 flex flex-wrap justify-center gap-4">
      {ProjectCards || ProjectCardSkeletons}
    </div>

  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Projects />
  </Layout>
);

export default NewComponent;
