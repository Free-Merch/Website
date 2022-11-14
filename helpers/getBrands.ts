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

const getBrands = async (id?: string): Promise<Brand[]> => {
  if(Object.keys(brandsToIdMap).length == 0){
    await createMap();
  }
  id = (id && brandsToIdMap[id]) ? brandsToIdMap[id] : id;
  const { data } = await client.query({query: brandsQuery(id)})
  let brands: Brand[] =[];
  // @ts-ignore
  brands.push({});
  data?.brands?.data.forEach((brand:any) => {
    const {id} = brand;
    let {logo, name, description, links, logoBgColor } = brand.attributes
    logo = {...logo.data.attributes};
    logo.ratio = logo.width/logo.height;
    brands.push({
      name, links: links,
      id,
      description, 
      logo,
      logoBgColor,
    })
  });

  return brands;
}

export default getBrands;