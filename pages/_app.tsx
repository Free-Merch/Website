import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} >
    <Head>
      <title>FreeMerch</title>
      <meta name="description" content="Get Free Merch" />
      <link rel="icon" href="favicon.ico" />
    </Head>
  </Component>
}

export default MyApp;
