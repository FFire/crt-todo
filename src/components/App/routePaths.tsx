export interface IRoutePath{
  path: string,
  name: string,
}

export interface IRoutePaths {
  HOME: IRoutePath;
  ABOUT: IRoutePath;
  NOT_FOUND:IRoutePath
}
export const routePaths: IRoutePaths = {
  HOME: { path: '/', name: 'Home' },
  ABOUT: { path: 'about', name: 'About' },
  NOT_FOUND: { path: '*', name: 'Page not found' },
};
