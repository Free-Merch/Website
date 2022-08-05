import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';


export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API,
  cache: new InMemoryCache()
})

const ApolloContextProvider = ({children}: {children: ReactNode})  => {
  return <div>
    <ApolloProvider client={client} >
      {children}
    </ApolloProvider>
  </div>
}

export default ApolloContextProvider;
