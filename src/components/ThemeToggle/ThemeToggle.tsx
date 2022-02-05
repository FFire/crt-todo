import { observer } from 'mobx-react';
import { ChangeEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { routePaths } from '../../routes/routes';
import StoreContext from '../../store/StoreContext';
import { UiThemes } from '../../store/UiStore';
import s from './ThemeToggle.module.css';

const ThemeToggle = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);

  const handleThemeToggle = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = e.target;
    uiStore.setUiTheme(checked ? UiThemes.DARK : UiThemes.LIGHT);
  };

  return (
        <div className={s.nav}>
          <input
            type='checkbox'
            id='ThemeToggle'
            defaultChecked={uiStore.getUiTheme === UiThemes.DARK}
            onChange={handleThemeToggle}
          />
          <label htmlFor='ThemeToggle'>Dark mode</label>
          <div className={s.justify}>
            <Link className={s.linkItem} to={routePaths.HOME.path}>{routePaths.HOME.name}</Link>
            <Link className={s.linkItem} to={routePaths.ABOUT.path}>{routePaths.ABOUT.name}</Link>
          </div>
        </div>
  );
};

export default observer(ThemeToggle);
