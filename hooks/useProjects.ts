import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { ImageType, ProjectBrief } from '../types';



const projectsQuery = gql`
  query {
    merches(sort: "id:desc"){
      data{
        id
        attributes{
          brand
          about
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
          campaigns(
            pagination: {
              start: 0
              limit: 3
            }
          ){
            items{
              image{
                data{
                  attributes{
                    url
                    alternativeText
                    name
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const useProjects = (): ProjectBrief[] => {
  const { data } = useQuery(projectsQuery, {client});
  const projectBriefs: ProjectBrief[] = data?.merches.data.map( (merch: any) => {
    const id = merch.id;
    merch = merch.attributes;
    const { brand, about, logoBgColor }: 
      {brand: string, about: string, logoBgColor: string} = merch;
    const logo: ImageType = {...merch.logo.data.attributes};
    if(logo) logo.ratio = logo?.width/logo?.height

    let campaigns: ImageType[] = [];
    merch.campaigns.map(
      ({items}: any) =>  {
        campaigns.push(...items.map( (item: any) => {
          const _item = {...item.image.data.attributes}
          _item.ratio = _item.width/_item.height
          return _item
        }))
      }
    )
    campaigns = campaigns.slice(0,3);

    return {
      brand,
      about,
      logo,
      logoBgColor,
      campaigns,
      id
    }
  })
  
  return projectBriefs;
}

export default useProjects;
