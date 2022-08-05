import Image from "next/image";
import Layout from "../../components/layout";

import Table from "../../components/table";
import { v4 } from "uuid";
import { ProjectCard } from "../../components/cards/project-card";
import { GreenButton } from "../../components/buttons";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import { MobileTable } from "../../components/table";

import Link from "next/link";
import useProjects from "../../hooks/useProjects";
import { useRouter } from "next/router";
import useProject from "../../hooks/useProject";
import { Item } from "../../types";

const TableHeaders = [
  "Item", "Name", "Quantity", "Shared", "Percentage", "Status", "Task"
]

const MobileTableHeaders = [
  "Item", "Name", "Shared", "Shared", "Percentage", "Quantity", "Task"
]

const getTableRows = (tableData: Item[]) => tableData?.map(row => {

  const {shared, quantity, image, name} = row;
  const percentage = parseInt((shared/quantity * 100).toString());
  const status = shared === quantity ? "Completed" : "Ongoing";
  const task = shared === quantity ? "Completed" : "Request";

  return [
    <Image key="1" className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" src={image.url} alt="shirt" layout="fixed" width={"32px"} height={"32px"}/>,
    <span key={v4()}>{name}</span>,
    <span key={v4()} className="text-grey-700 override-weight">{quantity}</span>,
    <span key={v4()} className="text-grey-700 override-weight">{shared}</span>,
    <div key={v4()} className="h-[20px] flex items-center">
      <div className="w-16 h-2 bg-grey-400 dark:bg-grey-200 relative text-left rounded-lg" key={v4()}>
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
        {percentage !== 100 &&
          <span 
            className="text-black-900 dark:text-white  absolute right-0 top-1/2 -translate-y-1/2 text-[7px] leading-[10px] font-medium">
            {percentage}%
          </span> 
        }
      </div>
    </div>,
    <span key={v4()} className={`cursor-default inline-block ${status === "Completed" ? "text-[#7174FF]" : "text-green-100"}`}>{status}</span>,
    <span key={v4()} className={`inline-block py-1 px-2 rounded-[30px] 
      ${status === "Completed" ? 
        "bg-[#7174FF] text-[#E7E7FF] hover:bg-[#E7E7FF] hover:text-[#7174FF]" : 
        "bg-green-100 text-[#E8FADF] cursor-pointer hover:bg-[#E8FADF] hover:text-green-100"}`}>{task}
      </span>,
  ]
});


const Project = () => {
  const router = useRouter()
  const { pid } = router.query
  const project = useProject(Number(pid));
  const { brand, logoBgColor, about, logo, links: _links, campaigns, campaignImages: _campaignImages } = project;
  const links = _links?.map((link, index) => (
    <Link key={index} href={link.url}>
      <span className={`inline-block mr-2`}>{link.logo as any}</span>
    </Link>
  ));

  const activeCampaigns = campaigns?.filter(c => c.active)
  const inActiveCampaigns = campaigns?.filter(c => !c.active)
  const [_activeRows, _inActiveRows]: [Item[], Item[]] = [ [], [] ]
  const [activeImages, inactiveImages]: [string[], string[]] = [[], []]
  activeCampaigns?.forEach(c => _activeRows.push(...(c.items ?? [])))
  activeCampaigns?.map(c => activeImages.push(...c.items.map(i => i.image.url)))
  inActiveCampaigns?.map(c => inactiveImages.push(...c.items.map(i => i.image.url)))
  inActiveCampaigns?.forEach(c => _inActiveRows.push(...(c.items ?? [])))
  const [activeRows, inActiveRows] = [getTableRows(_activeRows), getTableRows(_inActiveRows)]

  const campaignImages = _campaignImages?.map((campaign, index) => {
    return <div key={index}>
      <Image 
        className="shadow-[0px_8px_16px_rgba(171,190,209,0.4)]" src={campaign.url} 
        alt={campaign.alternativeText} layout="fixed" width={"60px"} height={"60px"}
      />
    </div>
  })

  let projects = useProjects()
  projects = projects?.slice(0, 3);
  const ProjectCards = projects?.map((project, index) => {
    const { about, logo, campaigns, brand, logoBgColor, id } = project;
    if(id.toString() === pid) return undefined
    return <div className="sm:mr-4 md:mr-7" key={index}>
      <ProjectCard  
        brand={brand}
        image={logo}
        about={about}
        bgColor={logoBgColor}
        campaigns={campaigns}
        id={id}
      />
    </div>
  })

  const { show } = useContext(ModalContext)

  return <>
    <div className="bg-grey-200 dark:bg-blue-800 -mx-10 md:-mx-24 px-10 md:px-24">
      <div className="w-full max-w-[1252px] mx-auto">
        <div className={`
          translate-y-1/4 shadow-[0px_0px_7px_4px_rgba(46,200,102,0.04)] 
          rounded-lg h-[100px] w-[100px] flex items-center justify-center`
        }
          style={{ backgroundColor: logoBgColor }}
        >
          {logo?.url && <Image src={logo?.url} className="mx-24" width={70} height={15} alt="brand image" />}
        </div>
      </div>
    </div>

    <div className="pt-8 mb-28 max-w-[1252px] mx-auto overflow-hidden">
      <div className="ellipsis relative">
        <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[#298A63] right-0 translate-x-2/4 -translate-y-2/4 " />
      </div>
      <h2 className="font-bold flex justify-between items-center text-blue-400 dark:text-white text-xl">
        {brand}
        <span className="flex text-blue-900 text-[19px] dark:text-white">
          {links}
        </span>
      </h2>
      <p className="text-grey-300 dark:text-grey-700 max-w-[569px] text-sm">
        {about}
      </p>
      <p className="text-black-900 font-medium text-xs dark:text-white mt-4">Item:</p>
      <div className="flex mt-2 child:mr-3 child:inline-block rounded-md child:cursor-pointer">
        {campaignImages.map((img, i) => <span key={v4()} 
            onClick={() => show("merch", {picture: _campaignImages[i].url})}>{img}
          </span>)}
      </div>

      <div className="mt-10 mb-20 px-[50px] py-[30px] bg-white dark:bg-blue-400">
        <h3 className="font-bold text-black-900 dark:text-white text-xl mb-[10px] border-b-[0.5px] pb-[10px] border-b-grey-300 ">Active</h3>
        <div className="hidden md:block">
          <Table 
            headers={TableHeaders} 
            onClick={(image) => show("merch", {picture: image})}
            rows={activeRows}
            images={activeImages}
          />
        </div>
        <MobileTable 
            onClick={(image) => show("merch", {picture: image})}
          className="md:hidden -mx-10 " 
          headers={MobileTableHeaders} 
          rows={activeRows}
          images={inactiveImages}  
        />
      </div>

      <div className="bg-white px-[50px] py-[30px] dark:bg-blue-400">
        <h3 className="font-bold text-black-900 dark:text-white text-xl mb-[10px] border-b-[0.5px] pb-[10px] border-b-grey-300 ">Completed</h3>
        <div className="hidden md:block">
          <Table  
            headers={TableHeaders} 
            rows={inActiveRows}
            onClick={(image) => show("merch", {picture: image})}
            images={inactiveImages}
          />
        </div>
        <MobileTable 
          className="md:hidden -mx-10" 
          headers={MobileTableHeaders} 
          onClick={(image) => show("merch", {picture: image})}
          images={inactiveImages}
          rows={inActiveRows}/>
      </div>

      <div className="mt-40">
        <h4 className="text-center text-white text-sm font-medium">Also View</h4>
        <div className="child:m-3 flex flex-wrap justify-center mb-10">
          {ProjectCards}
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