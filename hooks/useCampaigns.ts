import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Campaign } from '../types';

const campaignsQuery = gql`
  query {
    campaigns {
      data{
        attributes {
          name
          description
          brand 
          identifier
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
  const campaigns = data?.campaigns?.data.map((campaign:any) => {
    const {name, brand, description, identifier, merchandise: merchData} = campaign.attributes;
    const merchandise = merchData?.data?.map( (merch: any) => {
      return merch.attributes;
    })
    return {
      name, brand, description, identifier, merchandise
    }
  })
  return campaigns;
}

export default useCampaigns;
