import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand, Campaign } from '../types';
import useBrands from './useBrands';

const campaignsQuery = gql`
  query {
    campaigns {
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

const useCampaigns = (): Campaign[] => {
  const { data } = useQuery(campaignsQuery, {client});
  const brands = useBrands();

  const campaigns = data?.campaigns?.data.map((campaign:any) => {
    const {id} = campaign
    const {name, brand: brandName, description, active, identifier, merchandise: merchData} = campaign.attributes;
    const brand: Brand = brands && (brands[brandName.toLowerCase()] ?? {
      logo: {width:20, height:20, alternativeText: "...", url: "", name: brandName, ratio: 1}, 
      logoBgColor: "#ffffff", name: brandName, description: "", links: {} 
    });

    // @ts-ignore
    brand.links = brand.links;
    const merchandise = merchData?.data?.map( (merch: any) => {
      return merch.attributes;
    })
    return {
      name, id, brand, description, active, identifier, merchandise
    }
  });

  return campaigns;
}

export default useCampaigns;
