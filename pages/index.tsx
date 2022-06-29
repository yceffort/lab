import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>yceffort's laboratory</title>
        <meta name="description" content="yceffort's laboratory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <Link href="/ppt/how-browser-render-web-pages">
          <li>브라우저는 어떻게 웹 페이지를 렌더링 하는가?</li>
        </Link>
      </ul>
    </div>
  )
}

export default Home
