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
    'h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 duration-500',
  );

  return (
          <div className='w-full px-6 pb-2 bg-slate-100 '>
            <p className='text-slate-500 pl-6 dark:text-black duration-500 h-7
              text-sm md:text-base'
            >
              {statisticToText(tasksStore.getStatistic)}
            </p>
            <div className='w-full bg-gradient-to-r from-slate-200 to-stone-200 rounded-full duration-500
              h-2 md:h-4'
            >
              <div className={progressClass}/>
            </div>
          </div>
  );
};

export default observer(Progress);
