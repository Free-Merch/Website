import { gql, useQuery } from "@apollo/client";
import { IconType } from "react-icons";
import { BiLinkAlt } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { client } from "../context/apolloContext";
import { ImageType, Item } from "../types";


interface Campaign {
  items: Item[]
  active: boolean
}

interface Link{
  url: string
  logo: string | IconType
  name: string
}

interface Project {
  id: number
  brand: string,
  about: string,
  logoBgColor: string,
  links: Link[]
  logo: ImageType,
  campaignImages: ImageType[]
  campaigns: Campaign[]
}


const projectQuery = (id: number) => (
  gql`
    query {
      merch(id:${id}){
        data{
          attributes{
            brand
            about
            links
            logoBgColor
            logo{
              data{
                attributes{
                  alternativeText
                  name
                  url
                }
              }
            }
            campaigns{
              active
              items{
                quantity
                shared
                name
                image{
                  data{
                    attributes{
                      url
                      alternativeText
                      name
                    }
                  }
                }
              }
              }
          }
        }
      }
    }
  `
)

const linkImages = {
  twitter: <BsTwitter className="cursor-pointer"/>,   
  website: <BiLinkAlt className="cursor-pointer"/>,
  facebook: <BsFacebook className="cursor-pointer" />,
  instagram: <BsInstagram className="cursor-pointer" />,
  discord: <BsInstagram className="cursor-pointer" />,
  telegram: <BsTelegram className="cursor-pointer" />
}

const useProject = (id: number): Project => {
  const { data } = useQuery(projectQuery(id), {client});
  const merch = data?.merch.data.attributes;
  const logo: ImageType = merch?.logo.data.attributes;

  const campaigns: Campaign[] = merch?.campaigns.map(
    ({items}: any) =>  {
      const actives: boolean[] = [];
      const _items = items.map( (item: any): Item => {
        actives.push(item.quantity !== item.shared)
        return {
          image: item.image.data.attributes,
          name: item.name,
          quantity: item.quantity,
          shared: item.shared
        }
      })
      
      return {items: _items, active: actives.every((check) => check)}
    }
  )

  let campaignImages: ImageType[] = [];
  merch?.campaigns.map(
    ({items}: any) =>  {
      campaignImages.push(...items.map( (item: any) => item.image.data.attributes))
    }
  )
  campaignImages = campaignImages.slice(0,3);
  
  let links: Link[] = merch?.links && Object.keys( merch?.links )?.map((key) => ({
    url: merch.links[key],
    //@ts-ignore
    logo: linkImages[key],
    name: key
  }))

  
  return {
    id,
    brand: merch?.brand,
    about: merch?.about,
    logoBgColor: merch?.logoBgColor,
    logo,
    campaigns,
    links,
    campaignImages
  };
}

export default useProject;