import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';
import { ImageType } from '../types';

interface FAQ {
  question: string,
  answer: string
}

const query = gql`
  query {
    homePage{
      data{
        attributes{
          FAQ {
            question
            answer
          }
          Gallery{
            data{
              attributes{
                name
                alternativeText
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }`

const useHomePage = () => {
  const {data} = useQuery(query, {client})
  const faqs: FAQ[] = data?.homePage.data.attributes.FAQ
  const gallery: ImageType[] = data?.homePage.data.attributes.Gallery.data.map( (data:any) => data.attributes)
  gallery?.forEach(image => {
    image = {...image}
    image.ratio = image.width/image.height
    return image;
  })

  return {
    faqs,
    gallery
  }
}

export default useHomePage;
