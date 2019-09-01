import { createState } from 'solid-js';

export type ThemeTypes = 'light' | 'dark';
export interface Theme {
  header: string;
  primary: string;
  [k: string]: string;
}

const defaultTheme: ThemeTypes = 'light';

const themes: Record<ThemeTypes, Theme> = {
  dark: {
    header: '#eee',
    primary: '',
  },
  light: {
    header: '#eee',
    primary: '',
  },
};

const [theme, setTheme] = createState<Theme>(themes[defaultTheme]);

const UpdateTheme = (type: ThemeTypes) => {
  setTheme(themes[type]);
};

export { theme, UpdateTheme };
