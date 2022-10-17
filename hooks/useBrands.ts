import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand } from '../types';

const brandsQuery = (id: string, name: string) => gql`
    query {
    brands(filters: 
      {
        id: ${ id ? "{eq:"+ id + "}" : "{}"},
        name: ${ name ? "{eq:"+ name + "}" : "{}"}
      }
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

const useBrands = (id?: string, name?: string):  Brand[] => {
  const { data } = useQuery(brandsQuery(id ?? "", name ?? ""), {client});
  let brands: Brand[] = [];
  // @ts-ignore
  brands.push({});
  data?.brands?.data.forEach((brand:any) => {
    const {id} = brand;
    let {logo, name, description, links, logoBgColor } = brand.attributes
    logo = {...logo.data.attributes};
    logo.ratio = logo.width/logo.height;
    brands.push({
      name, links,
      description, 
      logo,
      logoBgColor,
      id
    })
  });

  return brands;
}

export default useBrands;
