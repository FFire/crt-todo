import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import '../../styles/output.css';

const Header = (): JSX.Element => {
  const { rootStore } = useContext(StoreContext);

  return (
    <header className='bg-slate-100 sm:rounded-t-lg'>
      <div className='
        text-transparent bg-clip-text bg-gradient-to-l duration-500 from-emerald-500 to-fuchsia-500 text-center
        p-4 text-3xl font-semibold
        sm:p-4 sm:text-3xl sm:font-bold
        md:p-10 md:text-4xl md:font-extrabold
        lg:p-10 lg:text-5xl
        xl:p-10 xl:text-6xl
      '>
        {rootStore.appCaption}
      </div>
    </header>
  );
};

export default observer(Header);
