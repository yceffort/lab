import '../styles/globals.css'
import type { AppProps } from 'next/app'

import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
