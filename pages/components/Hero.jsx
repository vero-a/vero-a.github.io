import React from 'react';
import Image from 'next/image';
import ProfilePicture from '../../public/ProfilePicture.jpg';
import {GoArrowDown} from 'react-icons/go';
import Link from 'next/link';

function Hero() {
  return (
    <section id='hero' className='h-full w-full pb-40 px-2 md:px-4 lg:px-10'>
      <div className='flex flex-col items-center justify-center md:pt-20 px-4 md:flex-row md:gap-6'>
        <div className='text-center justify-center p-10 md:text-left md:pr-6'>
          <h1 className='pb-2'>Hi, I am <span className='text-blue-500'>Veroneca</span>,</h1>
          <h2 className='py-2'>A Front-End Web Developer</h2>
          <p className='py-4 md:pt-2 max-w-lg'>I am a front end developer specializing in building and designing digital experiences. I am currently working with CSS, HTML, JavaScript, React, Tailwind & Next JS.</p>
          <Link href='/#projects'>
            <button className='bg-gradient-to-r from-blue-500 to-emerald-500 hover:bg-blue-500 flex gap-2 md:m-0'>
              Portfolio
              <span>
                <GoArrowDown className='h-6'/>
              </span>
            </button>
          </Link>
        </div>
        <div className='relative justify-center w-80 h-80 md:h-full md:ml-1 md:w-96 ' >
          <Image className='rounded-3xl' src={ProfilePicture} alt='Profile picture'/>
        </div>
      </div>
    </section>
  )
}

export default Hero