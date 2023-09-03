import Head from 'next/head';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';



export default function Home() {
  const [darkMode, setDarkMode]=useState(false);

  return (
    <div name="home" className={darkMode?"dark":""}>
      <Head>
        <title>Veroneca Abou Faissal Portfolio</title>
        <meta name='description'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <main className='dark:bg-gray-900'>
        <div className='py-8 mb-10 mx-6 flex justify-between md:mx-15 '>
          <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
          <Nav/>
        </div>
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}
