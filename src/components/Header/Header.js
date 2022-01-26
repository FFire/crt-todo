import React from 'react';
import '../../styles/output.css';

export const Header = () => (
  <header className='bg-slate-100 sm:rounded-t-lg'>
    <div className='
      text-transparent bg-clip-text bg-gradient-to-l from-emerald-500 to-fuchsia-500 text-center
      p-4 text-3xl font-semibold
      sm:p-4 sm:text-3xl sm:font-bold
      md:p-10 md:text-4xl md:font-extrabold
      lg:p-10 lg:text-5xl
      xl:p-10 xl:text-6xl
      '>CRA TO DO
    </div>
  </header>
);

// { /* sm 640, md 758, lg 1024, xl 1280, 2xl 1536 */ }
