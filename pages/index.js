import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Socials from '../components/Socials'
import Contact from '../components/Contact'
import Maps from '../components/Maps'
import Services from '../components/Services'
import Cookie from '../components/Cookie'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Template1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero heading='Klesarstvo Kirinec Dejan' message='Slogan/O firmi'/>
      <Services />
      <Products />
      <Slider />
      <Contact />
      <Maps />
      <Socials />
      <Cookie />
    </div>
  )
}
