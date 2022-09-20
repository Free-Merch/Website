import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@getFreemerch" />
          <meta name="twitter:title" content="Freemerch Homepage" />
          <meta name="twitter:description" content="Win free branded merchandise when you join campaings & 
            promote your brand when you create campaigns." 
          />
          <meta name="twitter:image" content="https://res.cloudinary.com/freemerchcloudinary/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1663653009/logo_7c91fc5575_rslzfu.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument