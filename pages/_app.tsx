import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import "../styles/Nprogress.css"
//Route Events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script strategy="lazyOnload" id='analytics script'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `}
    </Script>
    
    <Head>
      <title>FreeMerch</title>
      <meta name="description" content="Win a free branded merchandise" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      <link rel="icon" href="favicon.ico" />
    </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp;
