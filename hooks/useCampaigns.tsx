import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { ImageType, Campaign } from '../types';
import { graphql } from '../gql';

const campaignsQuery = graphql(/* GraphQL */ `
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
`);

const useCampaigns = (): Campaign[] => {
  const { data } = useQuery(campaignsQuery, {client});
  
 return data;
}

export default useCampaigns;
