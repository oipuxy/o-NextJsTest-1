import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="https://media.tenor.com/VkwiwuBYd1wAAAAd/dancing-bear.gif"
        width={500}
        alt='SupSup' />
    </main>
  )
}
