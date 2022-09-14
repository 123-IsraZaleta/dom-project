import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/atoms/button'

export default function Home() {
  return (
    <div className={styles.container}>
     <Button className='btn-gray btn-lg' > Subir </Button>
    </div>
  )
}
