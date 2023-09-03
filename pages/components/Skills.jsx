import React from 'react';
import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoJavascript} from 'react-icons/io';
import {SiCss3} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';
import {PiFigmaLogoDuotone} from 'react-icons/pi';
import {AiFillGithub} from 'react-icons/ai';


function Skills() {
  return (
    <div id='skills' className='w-full h-full my-20'>
        <h2 className='text-2xl tracking-widest uppercase text-center text-emerald-500 py-10 mx-4 md:text-3xl dark:text-emerald-500'>Skills</h2>
            <div>
                <ul className='flex text-3xl mx-4 flex-row gap-5 flex-grow sm:text-5xl md:text-6xl md:gap-10 justify-evenly'>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 text-[#f06529]'><AiFillHtml5/></li>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 text-[#F0DB4F]'><IoLogoJavascript/></li>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 text-[#264de4]'><SiCss3/></li>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 text-[#61DBFB]'><FaReact/></li>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 text-[#38bdf9]'><SiTailwindcss/></li>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 text-black'><TbBrandNextjs/></li>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 outline-black'><PiFigmaLogoDuotone/></li>
                    <li className='p6 cursor-default shadow-md rounded-md hover:scale-105 ease-in duration-300 dark:bg-stone-50 text-black'><AiFillGithub/></li>
                </ul>
            </div>
     </div>
  )
}

export default Skills