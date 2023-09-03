import React from 'react';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Nav() {

  const [darkMode, setDarkMode]=useState(false);

  return (
    <nav>
          <ul className='flex items-center gap-2'>
            <li className='rounded-md shadow-md shadow-gray-400 p-2 hover:scale-105  dark:text-slate-200 dark:shadow-gray-700'>
              <a href='https://www.linkedin.com/in/veroneca-abou-faissal/' target='_blank'>
                <FaLinkedinIn/>
              </a>
            </li>
            <li className='rounded-md shadow-md shadow-gray-400 p-2 hover:scale-105 dark:text-slate-200 dark:shadow-gray-700'>
              <a href='https://github.com/vero-a' target='_blank'>
                <FaGithub/>
              </a>
            </li>
            <li className='rounded-md shadow-md shadow-gray-400 p-2 hover:scale-105 dark:text-slate-200 dark:shadow-gray-700'>
              <a href='' target='_blank'>
                <AiOutlineMail/>
              </a>
            </li>
            <li>
              <button className='bg-gradient-to-r from-blue-500 to-emerald-500 hover:bg-blue-500 mx-2'>
              <a href='#' target='_blank'>Resume</a>
              </button>
            </li>
          </ul>
    </nav>
  )
}

export default Nav