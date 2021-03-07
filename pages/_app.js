import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'

function MyApp ({Component, pageProps}) {
  const {locale} = useRouter()
  const lang = locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  React.useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description"/>
        <meta name="keywords" content="Keywords"/>
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json"/>
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="icons/icon-152x152.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
