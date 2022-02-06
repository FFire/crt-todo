import React, { FC } from 'react';
import DeleteCompleted from './DeleteCompleted/DeleteCompleted';
import StateFilter from './StateFilter/StateFilter';
import TextFilter from './TextFilter/TextFilter';

const Filter: FC = () => (
  <div className='w-full pl-6 py-1 bg-slate-100 items-center justify-between text-sm font-light duration-500
    block
    sm:flex'
  >
    <TextFilter />
    <div className='flex items-center mt-3 sm:mt-0'>
      <StateFilter />
      <DeleteCompleted />
    </div>
  </div>
);

export default Filter;
