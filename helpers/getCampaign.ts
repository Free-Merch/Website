import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand, Campaign, Question } from '../types';
import { extractQuestions } from './extractQuestions';
import getBrands from './getBrands';

const campaignsQuery = (id: string) => gql`
  query {
    campaign(id: ${id}) {
      data{
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
          questions{
            text{
              title
              description
              validation
              placeholder
              index
              titleLink
              name
              required
            }
            radio{
              title
              description
              index
              titleLink
              name
              required
              radioOptions
              validation
            }
            image{
              title
              titleLink
              validation
              index
              name
              description
              required
              samples {      
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
    }
  }
`;



const getCampaign = async (id: string): Promise<Campaign & {questions :Question[]}> => {
  const { data } = await client.query({query: campaignsQuery(id)});
  const brands = await getBrands();
  const {name, brand: brandId, description, active, identifier, merchandise: merchData, questions: _questions} = data?.campaign?.data?.attributes;
  const brand: Brand = brands[brandId] ?? {
    logo: {width:20, height:20, alternativeText: "...", url: "", name: "...", ratio: 1}, 
    logoBgColor: "#ffffff", description: "", links: {}, id: 0
  };

  const merchandise = merchData?.data?.map( (merch: any) => {
    return merch.attributes;
  })
  let questions: Question[] = extractQuestions(_questions);
  
  return {
    name, brand, description, active, identifier, merchandise, questions, id:parseInt(id)
  }
}

export default getCampaign;
