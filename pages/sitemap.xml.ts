//pages/sitemap.xml.js
import { gql } from '@apollo/client';
import type { NextApiResponse } from 'next'
import { client } from '../context/apolloContext';


function generateSiteMap(campaigns: number[], brands: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>https://freemerch.io</loc>
      </url>
      <url>
        <loc>https://www.freemerch.io/campaigns</loc>
      </url>
        <url>
        <loc>https://www.freemerch.io/about-us</loc>
      </url>
      <url>
        <loc>https://www.freemerch.io/contact-us</loc>
      </url>
      <url>
        <loc>https://www.freemerch.io/brands</loc>
      </url>

      ${campaigns
       .map((id) => {
         return `
       <url>
          <loc>${`https://www.freemerch.io/campaigns/${id}`}</loc>
       </url>
      `;
      })
       .join('')}

      ${brands
       .map((brand) => {
         return `
       <url>
          <loc>${`https://www.freemerch.io/brands/${brand}`}</loc>
       </url>
      `;
      })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: {res: NextApiResponse}) {
  // We make an API call to gather the URLs for our site
  // get campaigns
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

  const campaigns = campaignsData.data.campaigns.data.map(
    ({id, attributes: {name }}: {id: number, attributes: {name: string}}) => {
      return name.toLowerCase().replace(/\s+/g, "-")
  });

  // get brands
  const brandsData = (await client.query({query: gql`
    query {
      brands {
        data{
          attributes {
            name
          }
        }
      }
    }
  `}));
  const brands = brandsData.data.brands.data.map(
    ({ attributes: {name } }: {attributes: {name: string}}) => name.toLowerCase().replace(/\s+/g, "-")
  );

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(campaigns, brands);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
