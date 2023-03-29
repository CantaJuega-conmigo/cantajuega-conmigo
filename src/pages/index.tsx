import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NewsletterSuscription from '@/components/NewsletterSuscription'
import Login from '@/components/Login'


export default function Home() {
  const [state, setState] = React.useState<any>("");
  useEffect(() => {
    getHello(setState)
  },[])
  return (
    <div>
       <NewsletterSuscription/>
    </div>
  )
}
