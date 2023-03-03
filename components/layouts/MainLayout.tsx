import React, { FC, PropsWithChildren } from 'react'
import styles from './MainLayout.module.css'
import Head from 'next/head'
import Navbar from '../Navbar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home - Tom</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <main className={styles.main}>
          { children }
        </main>
    </div>
  )
}

export default MainLayout