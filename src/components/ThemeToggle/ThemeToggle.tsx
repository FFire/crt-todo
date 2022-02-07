import { observer } from 'mobx-react';
import { ChangeEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { routePaths } from '../../routes/routes';
import StoreContext from '../../store/StoreContext';
import { UiThemes } from '../../store/UiStore';

const ThemeToggle = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);

  const handleThemeToggle = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = e.target;
    uiStore.setUiTheme(checked ? UiThemes.DARK : UiThemes.LIGHT);
  };

  return (
    <div className='sm:text-xl transition-all duration-500
        bg-slate-100 dark:bg-slate-700'>
      <div className='w-full pl-6 py-1 flex items-center justify-between rounded-lg duration-500
        bg-slate-100 hover:bg-slate-200
        dark:bg-slate-700 dark:hover:bg-slate-600
      '>
        <div className='flex items-center'>

          <input
            className='flex-none h-4 w-4 duration-500
              accent-slate-600 hover:scale-110 hover:accent-slate-500
              dark:accent-slate-400  dark:hover:accent-slate-400
            '
            type='checkbox'
            id='ThemeToggle'
            defaultChecked={uiStore.getDarkMode}
            onChange={handleThemeToggle}
          />

          <label
            className='mx-2 duration-500
              text-gray-900/30 hover:text-gray-900/70
              dark:text-gray-200/40 dark:hover:text-gray-200/70
            '
            htmlFor='ThemeToggle'
          >Dark mode</label>
        </div>

        <div className='pr-10 space-x-4 duration-500'>

          <Link className='
          text-gray-900/30 hover:text-gray-900/70
          dark:text-gray-200/40 dark:hover:text-gray-200/70
          '
          to={routePaths.HOME.path}
          >
            {routePaths.HOME.name}
          </Link>

          <Link className='
          text-gray-900/30 hover:text-gray-900/70
          dark:text-gray-200/40 dark:hover:text-gray-200/70
          '
          to={routePaths.ABOUT.path}
          >
            {routePaths.ABOUT.name}
          </Link>

        </div>

      </div>
    </div>
  );
};

export default observer(ThemeToggle);
