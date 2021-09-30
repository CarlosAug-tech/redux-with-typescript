import dark from './dark';
import light from './light';

export type TThemeType = {
  name: string;
  colors: {
    primaryBackground: string;
    primaryColor: string;
  };
};

export { dark, light };
