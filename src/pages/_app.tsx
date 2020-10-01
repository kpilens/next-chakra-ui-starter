import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import theme from '@lib/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset />
                <Component {...pageProps} />
            </ColorModeProvider>
        </ThemeProvider>
    );
}
