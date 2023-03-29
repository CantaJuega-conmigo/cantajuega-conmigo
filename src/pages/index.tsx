import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NewsletterSuscription from '@/components/NewsletterSuscription'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
       <NewsletterSuscription/>
      
    </div>
  )
}
