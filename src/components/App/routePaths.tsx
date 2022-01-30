export interface IRoutePath{
  path: string,
  name: string,
}

export type TRoutePaths = Record<string, IRoutePath>

export const routePaths: TRoutePaths = {
  HOME: { path: '/', name: 'Home' },
  ABOUT: { path: 'about', name: 'About' },
  NOT_FOUND: { path: '*', name: 'Page not found' },
};
