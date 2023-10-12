import Head from 'next/head'
import styles from '../styles/Home.module.css'  ;

import Link from 'next/link';
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="Keywords" content='ninjas'/>
    </Head>
    <div >

    <h1 className={styles.title}>Homepage</h1>
    <p  className={styles.text}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, saepe adipisci? A 
    maiores praesentium illo doloribus omnis! Atque praesentium, obcaecati necessitatibus
     dolor sapiente quia minima repellat, dignissimos, laborum soluta nisi.
    </p>
    <p  className={styles.text}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, saepe adipisci? A 
    maiores praesentium illo doloribus omnis! Atque praesentium, obcaecati necessitatibus
     dolor sapiente quia minima repellat, dignissimos, laborum soluta nisi.
    </p>
    <Link href="/ninjas"  className={styles.btn}>See Ninja Listing</Link>
    </div>
    </>
  )
}
