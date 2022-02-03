import React, { FC } from 'react';
import DeleteCompleted from './DeleteCompleted/DeleteCompleted';
import s from './Filter.module.css';
import StateFilter from './StateFilter/StateFilter';
import TextFilter from './TextFilter/TextFilter';

const Filter: FC = () => (
    <div className={s.filter}>
      <TextFilter />
      <StateFilter />
      <DeleteCompleted />
    </div>
);

export default Filter;
