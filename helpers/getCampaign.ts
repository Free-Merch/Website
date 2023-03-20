import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand, Campaign, Question } from '../types';
import { extractQuestions } from './extractQuestions';
import { getBrand } from './getBrands';

const campaignToIdMap: {[key:string]: string} = {};

const createMap = async () => {
  const campaignsData = (await client.query({query: gql`
    query {
      campaigns {
        data{
          id
          attributes {
            name
          }
        }
      }
    }
  `}));

  campaignsData.data.campaigns.data.map(({id, attributes: {name}}: {id: string, attributes: {name: string}}) => {
    campaignToIdMap[name.toLowerCase().replace(/\s+/g, "-")] = id;
  });
}

const campaignsQuery = (id: string) => {

  return gql`
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
`};

setInterval(createMap, 120000);


const getCampaign = async (id: string): Promise<Campaign & {questions :Question[]}> => {
  if(Object.keys(campaignToIdMap).length == 0){
    await createMap();
  }
  id = (campaignToIdMap[id]) ? campaignToIdMap[id] : id;
  const { data } = await client.query({query: campaignsQuery(id)});
  const {name, brand: brandId, description, active, identifier, merchandise: merchData, questions: _questions} = data?.campaign?.data?.attributes;
  const _brand = await getBrand(brandId);
  const brand: Brand = _brand ?? {
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
