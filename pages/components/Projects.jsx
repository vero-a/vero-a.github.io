import React from 'react';
import Image from 'next/image';
import LittleLemon from '../../public/Little-Lemon.png';
import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoJavascript} from 'react-icons/io';
import {SiCss3, SiTailwindcss} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import LuxuryWesternResort from '../../public/LuxuryWesternResort.png';


function Projects() {
  return (
    <div id='projects' className='w-full h-full mt-5 mb-10'>
        <div className='max-w-screen-lg px-4 mx-auto'>
        <h2 className='text-2xl tracking-widest uppercase text-emerald-500 py-10 mx-4 md:text-3xl dark:text-emerald-500'>Projects</h2>
            <div className='grid sm:grid-cols-2 gap-8'>

              <card className='relative items-center h-full justify-center shadow-md shadow-gray-400 rounded-md p-4 group hover:bg-gradient-to-r from-blue-500 to-emerald-500'>
                    <Image src={LuxuryWesternResort} alt='Picture of a website created called Luxury Western Resort' className='rounded-md group-hover:opacity-10'/>
                    <div className='grid grid-rows items-center justify-left'>
                        <h3 className='font-medium my-6'>Luxury Western Resort</h3>
                        <p className='font-normal py-2'>This is a website created for Luxury Western Resort using React JS & Tailwind CSS. It includes many features such as a component to display the rooms available based on the number of guests.</p>
                        <ul className='flex justify-start gap-8 py-2'>
                          <li className=' text-[#f06529]'><AiFillHtml5/></li>
                          <li className=' text-[#F0DB4F]'><IoLogoJavascript/></li>
                          <li className=' text-[#264de4]'><SiCss3/></li>
                          <li className=' text-[#61DBFB]'><FaReact/></li>
                          <li className=' text-[#38bdf9]'><SiTailwindcss/></li>
                        </ul>
                    </div>
                    <div className='md:hidden flex justify-center md:flex-row gap-2 mt-2 md:gap-6 w-full md:group-hover:block md:absolute md:top-[40%] md:left-[25%] md:translate-x-0 md:translate-y-0'>
                      <a
                        href='https://github.com/vero-a/Luxury-Western-Resort'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <button className='bg-stone-50 text-gray-900 shadow-lg md:w-1/2 tracking-wide uppercase font-normal my-1 px-10 md:mx-1 py-4'>Code</button>
                      </a>
                      <a
                        href='https://luxury-western-resort.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <button className='bg-stone-50 text-gray-900 shadow-lg md:w-1/2 tracking-wide uppercase font-normal my-1 px-10 md:mx-1 py-4'>Demo</button>
                      </a>
                    </div>
              </card>

              <card className='relative items-center h-full justify-center shadow-md shadow-gray-400 rounded-md p-4 group hover:bg-gradient-to-r from-blue-500 to-emerald-500'>
                    <Image src={LittleLemon} alt='Picture of a website created called Little Lemon' className='rounded-md group-hover:opacity-10'/>
                    <div className='grid grid-rows items-center justify-left'>
                        <h3 className='font-medium my-6'>Little Lemon Restaurant</h3>
                        <p className='font-normal py-2'>This is a website created for Little Lemon Restaurant using React JS. This design was created on Figma based on Meta&apos;s certification requirements, afterwards, recreated with React JS.</p>
                        <ul className='flex justify-start gap-8 py-2'>
                          <li className=' text-[#f06529]'><AiFillHtml5/></li>
                          <li className=' text-[#F0DB4F]'><IoLogoJavascript/></li>
                          <li className=' text-[#264de4]'><SiCss3/></li>
                          <li className=' text-[#61DBFB]'><FaReact/></li>
                        </ul>
                    </div>
                    <div className='md:hidden flex justify-center md:flex-row gap-2 mt-2 md:gap-6 w-full md:group-hover:block md:absolute md:top-[40%] md:left-[25%] md:translate-x-0 md:translate-y-0'>
                      <a
                        href='https://github.com/vero-a/Little-Lemon-Restaurant'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <button className='bg-stone-50 text-gray-900 shadow-lg md:w-1/2 tracking-wide uppercase font-normal my-1 px-10 md:mx-1 py-4'>Code</button>
                      </a>
                      <a
                        href='https://little-lemon-restaurant-38968zfaw-vero-a.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <button className='bg-stone-50 text-gray-900 shadow-lg md:w-1/2 tracking-wide uppercase font-normal my-1 px-10 md:mx-1 py-4'>Demo</button>
                      </a>
                    </div>
                </card>

            </div>

          </div>
          </div>
  )
}

export default Projects