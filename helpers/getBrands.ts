import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand } from '../types';

const brandsQuery = gql`
    query {
    brands {
      data{
        attributes {
          name
          description
          logoBgColor
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

const getBrands = async (): Promise<{[key:string]: Brand}> => {
  const { data } = await client.query({query: brandsQuery})
  let brands: {[key:string]: Brand} = {};
  data?.brands?.data.forEach((brand:any) => {
    let {logo, name, description, links, logoBgColor } = brand.attributes
    logo = {...logo.data.attributes};
    logo.ratio = logo.width/logo.height;
    brands[name.toLowerCase()] = {
      name, links: JSON.parse(links ?? "{}"),
      description, 
      logo,
      logoBgColor,
    }
  });
  return brands;
}

export default getBrands;