import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand } from '../types';

const brandsQuery = (id: string, name: string) => gql`
    query {
    brands(filters: 
      {
        id: ${ id ? "{eq:"+ id + "}" : "{}"},
        name: ${ name ? "{eq:\""+ name + "\"}" : "{}"}
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

const getBrands = async (id?: string, name?: string): Promise<Brand[]> => {
  const { data } = await client.query({query: brandsQuery(id ?? "", name ?? "")})
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