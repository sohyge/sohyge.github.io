import { DefaultTheme } from 'styled-components';

const deviceSizes = {
  xs: '320px',
  sm: '375px',
  md: '601px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

const fontFamily = {
  light: `"ProximaNova-Light", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  regular: `"ProximaNova-Regular", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  medium: `"ProximaNova-Medium", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  semibold: `"ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  bold: `"ProximaNova-bold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
};

const theme: DefaultTheme = {
  fontFamily: {
    light: `${fontFamily.light}`,
    regular: `${fontFamily.regular}`,
    medium: `${fontFamily.medium}`,
    semibold: `${fontFamily.semibold}`,
    bold: `${fontFamily.bold}`,
  },
  media: {
    xs: `(min-width: ${deviceSizes.xs})`,
    sm: `(min-width: ${deviceSizes.sm})`,
    md: `(min-width: ${deviceSizes.md})`,
    lg: `(min-width: ${deviceSizes.lg})`,
    xl: `(min-width: ${deviceSizes.xl})`,
    xxl: `(min-width: ${deviceSizes.xxl})`,
  },
};

export { theme };
