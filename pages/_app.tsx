import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} >
    <Head>
      <title>FreeMerch</title>
      <meta name="description" content="Get Free Merch" />
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5RWRHZ2');
      `}
    </Script>
  </Component>
}

export default MyApp;
