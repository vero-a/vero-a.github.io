import Image from 'next/image';
import Inter  from 'next/font/google';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import ProfilePicture from '../public/ProfilePicture.jpg';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode]=useState(false);
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Veroneca Abou Faissal Portfolio</title>
        <meta name='description'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-10 flex justify-between'>
            <h1 className='text-xl dark:text-slate-200'></h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to bg-yellow-300 text-white px-4 py-2 rounded-md ml-8 dark:text-black' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text text-blue-500 font-medium'>Veroneca Abou Faissal</h2>
            <h3 className='text-2xl py-2 dark:text-slate-400'>Front-End Developer</h3>
            <p className='text-md py-5 pb-0 leading-8 text-gray-800 dark:text-slate-400'>Front end developer with css, html, javaScript & react.</p>
          </div>
          <div className='text-2xl flex justify-center pt-1 pb-5 text-gray-600'>
            <AiFillLinkedin />
          </div>
          <div className='relative mx-auto pb-6 justify-center w-80 h-80 md:w-96 md:h-96' >
            <Image className='rounded-full' src={ProfilePicture}/>
          </div>
        </section>

        <section>
          <div className='text-center mt-3'>
            <h3 className='text-3xl py-1 dark:text-slate-300'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>Front end development with css, html, javaScript, <span className='text-blue-600'>react</span>, next.js & tailwind css.</p>
          </div>

          <h3 className='text-3xl p-5 mt-6 text-center dark:text-slate-300'>Projects</h3>
          <div className='lg:flex gap-10 justify-center'>
            <div className='text-center bg-yellow-200 shadow-xl p-10 rounded-xl my-10'>
              <h4>Little Lemon</h4>
            </div>
            <div className='text-center bg-yellow-200 shadow-xl p-10 rounded-xl my-10'>
              <h4>Project 2</h4>
            </div>
            <div className='text-center bg-yellow-200 shadow-xl p-10 rounded-xl my-10'>
              <h4>Project 3</h4>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
