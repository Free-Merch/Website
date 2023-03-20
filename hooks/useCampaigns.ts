import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand, Campaign } from '../types';
import useBrands from './useBrands';
import useBrand from './useBrands';

const campaignsQuery = (brand: string) => gql`
  query {
    campaigns(filters: {brand: ${ brand ? "{eq:"+ brand + "}" : "{}"}}, sort: ["id"]) {
      data{
        id
        attributes {
          name
          description
          brand 
          identifier
          active
          merchandise {
            data {
              attributes {
                url
                width
                height
                name
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`; 

const useCampaigns = (id?: string): Campaign[] => {

  const { data } = useQuery(campaignsQuery(id ?? ""), {client});
  const brands = useBrands();



  const campaigns = data?.campaigns?.data.map((campaign:any) => {
    const {id} = campaign
    const {name, brand: brandId, description, active, identifier, merchandise: merchData} = campaign.attributes;
    const brand: Brand = brands[brandId] ?? {
      logo: {width:20, height:20, alternativeText: "...", url: "", name: "...", ratio: 1}, 
      logoBgColor: "#ffffff", name: "...", description: "", links: {} , id: "0"
    };

    // @ts-ignore
    brand.links = brand.links;
    const merchandise = merchData?.data?.map( (merch: any) => {
      return merch.attributes;
    })
    return {
      name, id: parseInt(id), brand, description, active, identifier, merchandise
    }
  });
  
  return campaigns?.reverse();
}

export default useCampaigns;
