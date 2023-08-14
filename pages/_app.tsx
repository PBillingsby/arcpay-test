import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* COFFEE CUP TITLE ICON */}
        <link rel="title icon" href="/coffee-cup.svg" />
        {/* SQUARE TITLE ICON */}
        {/* <link rel="title icon" href="/icon.svg" /> */}

        <title>ArcPay</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false
})
