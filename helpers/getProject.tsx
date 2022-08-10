import { gql, useQuery } from "@apollo/client";
import { client } from "../context/apolloContext";
import { Campaign, ImageType, Item, Link, Project } from "../types";


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
                  width
                  height
                }
              }
            }
            campaigns{
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
                      width
                      height
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

const getProject = async (id: number): Promise<Project> => {
  const { data } = await client.query({query: projectQuery(id)})
  const merch = data?.merch.data.attributes;
  const logo: ImageType = {...merch?.logo.data.attributes};
  if(logo) logo.ratio = logo?.width/logo?.height;

  const campaigns: Campaign[] = merch?.campaigns.map(
    ({items}: any) =>  {
      const actives: boolean[] = []
      const _items = items.map( (item: any): Item => {
        actives.push(item.quantity !== item.shared)
        const image = { ...item.image.data.attributes }
        image.ratio = image?.width/image?.height

        return {
          image,
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
      campaignImages.push(...items.map( (item: any) => {
        const _item = {...item.image.data.attributes};
        _item.ratio = _item.width/_item.height
        return _item
      }))
    }
  )
  campaignImages = campaignImages.slice(0,3);
  
  let links: Link[] = merch?.links && Object.keys( merch?.links )?.map((key) => ({
    url: merch.links[key],
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

export default getProject;