import React from 'react';

export const Spinner = (): JSX.Element => (
    <div className='pb-10 mt-14 flex items-center justify-center space-x-3'>
      <div className='p-2 w-24 h-24 border-t-4 border-l-4 border-fuchsia-800 rounded-full animate-spin' />

      <p className='
        p-3 text-4xl font-extrabold text-transparent bg-clip-text animate-pulse bg-gradient-to-l
        from-emerald-700 to-fuchsia-700
      '>
        Data is loading...
      </p>
    </div>
);
