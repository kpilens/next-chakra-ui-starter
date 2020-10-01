/**
 * Instead of spitting out string variables all over the codebase,
 * we will keep most recurring string constants here to maintain a consistent look and feel
 * across the entire project
 */

import { theme as chakraTheme, DefaultTheme } from '@chakra-ui/core';

// interface IFonts extends CustomTheme
interface ICustom {
    buttonHeight: string;
    inputMinHeight: string;
    inputFontSize: string;
    inputPlaceHolder: string;
    blue: string;
    green: string;
    headerHeight: string;
    defaultBox: string;
    paddingWrapper: string;
    fixedMarginTop: string;
    defaultWrapper: string;
    fixedpadding: string;
    lightShadow: string;
    background: string;
    topZindex: string;
    thickBorder: string;
    altBackground: string;
    defaultRadius: string;
    defaultShadow: string;
    defaultBorder: string;
    altBorder: string;
    brand: string;
    tableBorder: string;
    tableBackgroundDark: string;
    tableBackground: 'hsl(0,0%,98%)' | string;
    tableTextColor: 'hsl(0,0%,30%)' | string;
    [key: string]: string;
}

// interface IColor extends

interface IThemeProps extends DefaultTheme {
    fonts: {
        mono: string;
        heading: string;
        body: string;
    };
    custom: ICustom;
}
type TBreakPoint = Array<string>;

const fonts = {
    ...chakraTheme.fonts,
    mono: `'Menlo', Monaco, Fira Code, Ubuntu Mono, monospace`,
    heading: `"Graphik Web", Cantarell, Oxygen, Ubuntu, sans-serif`,
    body: `"Graphik Web", Segoe UI, Cantarell, Oxygen, Ubuntu, Roboto, Fira Sans, Helvetica Neue, sans-serif`,
};
const fontSizes = {
    xs: '0.65rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
};

const defaults = {
    defaultBox: '1rem',
    defaultWrapper: '.5rem 1.1rem',
    defaultRadius: '4px',
    defaultShadow: '10px 7px 50px rgba(0,50,30,0.05)',
    defaultBorder: '1px solid #38a169',
    headerHeight: '60px',
    buttonHeight: '48px',
    fixedMarginTop: '3rem',
    paddingWrapper: '.5rem 2rem',
};

const custom = {
    ...defaults,
    altBorder: '1px solid #dddddd',
    thickBorder: '2px solid #38a169',
    altBackground: '#fafffd',
    background: '#F7FAFC',
    inputMinHeight: '48px',
    inputFontSize: '16px',
    inputPlaceHolder: '14px',
    fixedpadding: '2rem',
    topZindex: '99910',
    tableBackgroundDark: '#f5f5f5',
    tableBackground: 'hsl(0,0%,98%)',
    tableTextColor: 'hsl(0,0%,30%)',
    tableBorder: '1px solid rgba(77, 77, 77, 0.3)',
    lightShadow: '6px 5px 10px rgba(0,50,30,0.03)',
    blue: '#0476D0',
    green: '#028248',
    main: 'green.600',
    green700: '#276749',
    green800: '#22543d',
    brand: '#1fdc6b',
};
const colors: any = {
    ...chakraTheme.colors,
    black: '#40474e',
    default: '#1fdc6b',
    tomato: 'FF5238',
    text: '#1D1D1D',
    background: '#F7FAFC',
    altBackground: '#fafffd',
};
const breakpoints: TBreakPoint = ['40em', '52em', '64em'];

const theme: IThemeProps = {
    ...chakraTheme,
    colors,
    fonts,
    fontSizes,
    breakpoints,
    custom,
    icons: {
        ...chakraTheme.icons,
    },
};

export default theme;

/* CSS */
// --baby-powder: hsla(156, 2%, 100%, 1);
// --prussian-blue: hsla(200, 90%, 25%, 1);
// --malachite: hsla(144, 86%, 86%, 1);
// --arctic-lime: hsla(70, 100%, 95%, 1);
// --baby-powder-2: hsla(156, 2%, 100%, 1);
// fafffd,062c3f,#1fdc6b,c9f200,fafffd
