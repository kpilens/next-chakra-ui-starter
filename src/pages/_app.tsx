import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/core';
import theme from '@lib/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
                <Component {...pageProps} />
        </ChakraProvider>
    );
}
