import React from 'react';
import '../../styles/output.css';
import {
  Telegram, Github, ReactSvg, MobxSvg, TailwindSvg, TypescriptSvg, ReactrouterSvg,
} from '../../assets/assets';

export const About = (): JSX.Element => (
  <div className='sm:rounded-b-lg px-6 py-6 text-lg duration-500
    bg-slate-100 text-slate-400
    dark:bg-slate-700 dark:text-slate-300'>
    <p><span className='w-5 h-5 mr-2'>😎</span><strong>Alexandr Belan</strong></p>
    <p className='flex items-center'><Github className='w-5 h-5 mr-2 duration-500 dark:fill-white fill-black'/>️
      <a className='underline hover:text-black  dark:hover:text-white' aria-label='github-link' href='https://github.com/FFire/crt-todo'> github.com/FFire/crt-todo</a>
    </p>

    <p className='flex items-center'><Telegram className='w-5 h-5 mr-2  fill-sky-500'/>️
      <a className='underline hover:text-black  dark:hover:text-white' href='https://t.me/overstar'>t.me/overstar</a>
    </p>
    <br />
    <hr />
    <p> Used technology:</p>
      <ul>

        <li className='flex items-center'>
          <ReactSvg className='w-5 h-5 mx-2 fill-sky-500'/>️
          <a className='underline  hover:text-black  dark:hover:text-white' href='https://reactjs.org/'>React</a>
        </li>

        <li className='flex items-center'>
          <MobxSvg className='w-5 h-5 mx-2'/>
          <a className='underline hover:text-black  dark:hover:text-white' href='https://mobx.js.org/'>MobX</a>
        </li>

        <li className='flex items-center'>
          <TailwindSvg className='w-5 h-5 mx-2'/>
          <a className='underline hover:text-black  dark:hover:text-white' href='https://tailwindcss.com/'>Tailwind css</a>
        </li>

        <li className='flex items-center'>
          <ReactrouterSvg className='w-5 h-5 mx-2 dark:fill-white duration-500'/>
          <a className='underline hover:text-black  dark:hover:text-white' href='https://reactrouter.com/'>React Router</a>
        </li>

        <li className='flex items-center'>
          <TypescriptSvg className='w-5 h-5 mx-2'/>
          <a className='underline hover:text-black  dark:hover:text-white' href='https://www.typescriptlang.org/'>Type script</a>
        </li>

      </ul>
  </div>
);
