import { gql, useQuery } from '@apollo/client';
import { client } from '../context/apolloContext';

interface FAQ {
  question: string,
  answer: string
}

interface Gallery {
  name: string
  alternativeText: string,
  url:string,
  width: number
  height: number
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
  const {data} = useQuery(query, {client});

  const faqs: FAQ[] = data?.homePage.data.attributes.FAQ;
  const gallery: Gallery[] = data?.homePage.data.attributes.Gallery.data.map( (data:any) => data.attributes)
  return {
    faqs, gallery
  }
}

export default useHomePage;
