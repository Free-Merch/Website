import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand } from '../types';

const brandsToIdMap: {[key:string]: string} = {};

const createMap = async () => {
  const brandsData = (await client.query({query: gql`
    query {
      brands {
        data{
          id
          attributes {
            name
          }
        }
      }
    }
  `}));

  brandsData.data.brands.data.map(({id, attributes: {name}}: {id: string, attributes: {name: string}}) => {
    brandsToIdMap[name.toLowerCase().replace(/\s+/g, "-")] = id;
  });
}
const brandsQuery = (id?: string) => gql`
    query {
    brands(filters: 
      {
        id: ${ id ? "{eq:"+ id + "}" : "{}"},
      },
      sort: ["id"]
    ) {
      data{
        id
        attributes {
          name
          description
          logoBgColor
          links
          logo {
            data{
              attributes{
                url
                height
                alternativeText
                width
              }
            }
          }
        }
      }
    }
  }
`; 

setInterval(createMap, 120000);

export type BrandMap = {[key: string]: Brand};

const getBrands = async (): Promise<BrandMap> => {
  const { data } = await client.query({query: brandsQuery()})
  let brands: BrandMap = {};
  data?.brands?.data.forEach((brand:any) => {
    const {id} = brand;
    let {logo, name, description, links, logoBgColor } = brand.attributes
    logo = {...logo.data.attributes};
    logo.ratio = logo.width/logo.height;
    brands[id] = ({
      name, links: links,
      id,
      description, 
      logo,
      logoBgColor,
    })
  });

  return brands;
}

export const getBrand = async (id: string) => {
  if(Object.keys(brandsToIdMap).length == 0){
    await createMap();
  }
  // Todo: Dev assumes its a number if its not in the createMap array
  id = (id && brandsToIdMap[id]) ? brandsToIdMap[id] : id;
  const brands = await getBrands();
  return brands[id]
}

export default getBrands;