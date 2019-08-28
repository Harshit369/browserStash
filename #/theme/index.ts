import { createState } from 'solid-js';

export type ThemeTypes = 'light' | 'dark';
export type Theme = any;

const defaultTheme: ThemeTypes = 'light';

const themes: Record<ThemeTypes, Theme> = {
  dark: {
    primary: '',
  },
  light: {
    primary: '',
  },
};

const [theme, setTheme] = createState<Theme>(themes[defaultTheme]);

const UpdateTheme = (type: ThemeTypes) => {
  setTheme(themes[type]);
};

export { theme, UpdateTheme };
