import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { Brand } from '../types';
import { useEffect, useState } from 'react';
import getBrands, { BrandMap, getBrand } from '../helpers/getBrands';
import { EmptyBrand } from '../utils/constants';

const brandsQuery = (id: string, name: string) => gql`
    query {
    brands(filters: 
      {
        id: ${ id ? "{eq:"+ id + "}" : "{}"},
        name: ${ name ? "{eq:"+ name + "}" : "{}"}
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

export const useBrand = (id: string):  Brand => {
  const [brand, setBrand] = useState<Brand>(EmptyBrand)

  useEffect(() => {
    (async () => {
      const brand = await getBrand(id)
      setBrand(brand)
    })()
  }, [id])

  return brand;
}

const useBrands = ():  BrandMap => {
  const [brands, setBrands] = useState<BrandMap>({})

  useEffect(() => {
    (async () => {
      const brands = await getBrands()
      setBrands(brands)
    })()
  }, [])

  return brands;
}

export default useBrands;
