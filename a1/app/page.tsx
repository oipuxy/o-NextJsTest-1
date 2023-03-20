import Image from 'next/image'
import styles from './page.module.css'

/* 
This will show the bear gif which is located int the public director
images placed here do no require explicit path
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Damsel</h1>
      <br />
      <Image
        src="/db.gif"
        width={500}
        height={500}
        alt='SupSup' />
      <h3>Bearington</h3>
    </main>
  )
}
