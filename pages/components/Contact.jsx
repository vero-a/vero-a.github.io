import React from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Contact() {
  return (
    <div id='contact' className='px-10 pb-10'>
        <h2 className='text-2xl tracking-widest uppercase text-center text-emerald-500 py-10 mx-4 md:text-3xl dark:text-emerald-500'>Let&apos;s get in touch!</h2>
            <div>
                <ul className='flex text-3xl mx-4 gap-5 justify-center'>
                    <li className='rounded-md shadow-md shadow-gray-400 p-2 hover:scale-105 dark:text-slate-200 dark:shadow-gray-700'>
                        <a onClick={() => window.location = 'mailto:veronecaa2000@gmail.com'} target='_blank' className='flex gap-1'>
                        <AiOutlineMail/>
                        <p>veronecaa2000@gmail.com </p>
                        </a>
                    </li>
                    <li className='rounded-md shadow-md shadow-gray-400 p-2 hover:scale-105  dark:text-slate-200 dark:shadow-gray-700'>
                        <a href='https://www.linkedin.com/in/veroneca-abou-faissal/' target='_blank'>
                        <FaLinkedinIn/>
                        </a>
                    </li>
                </ul>
            </div>
     </div>
  )
}

export default Contact