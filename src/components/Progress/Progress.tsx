import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import { IStatistic } from '../../store/TasksStore';
import '../../styles/output.css';

const Progress = (): JSX.Element => {
  const { tasksStore } = useContext(StoreContext);

  const statisticToClass = (statistic: IStatistic): string => {
    // DO NOT DELETE -- this is for safe classes in tail wind css
    // const className = ['w-0', 'w-1/12', 'w-2/12', 'w-3/12',
    //   'w-4/12', 'w-5/12', 'w-6/12', 'w-7/12', 'w-8/12',
    //   'w-9/12', 'w-10/12', 'w-11/12', 'w-12/12'];
    const completedFraction = statistic.completedTaskCount / statistic.taskCount;
    if (completedFraction < 0.01) return 'w-0';

    const twelvesFraction = !isNaN(completedFraction)
      ? Math.trunc((completedFraction * 12)).toString()
      : '';
    const widthClass = `w-${twelvesFraction}/12`;
    return widthClass;
  };

  const statisticToText = (statistic: IStatistic): string => `Completed ${statistic.completedTaskCount} of ${statistic.taskCount}`;

  const progressClass = cn(
    statisticToClass(tasksStore.getStatistic),
    'h-full rounded-full bg-gradient-to-r duration-500',
    'from-cyan-400 to-fuchsia-400',
    'dark:from-cyan-600 dark:to-fuchsia-600',
  );

  return (
    <div className='w-full px-6 pb-2 duration-500
      bg-slate-100 dark:bg-slate-700'>
      <p className='pl-6 h-7 duration-500
        text-sm md:text-base
        text-slate-500 dark:text-slate-400
      '>
        {statisticToText(tasksStore.getStatistic)}
      </p>
      <div className='w-full bg-gradient-to-r rounded-full duration-500
        h-2 md:h-4
        from-slate-200 to-stone-200
        dark:from-slate-600 dark:to-zinc-500
      '>
        <div className={progressClass}/>
      </div>
    </div>
  );
};

export default observer(Progress);
