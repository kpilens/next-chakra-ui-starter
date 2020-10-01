import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
// import { resetServerContext } from 'react-beautiful-dnd';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<any> {
        // react-b-dnd fix instanceCount for SSR https://github.com/atlassian/react-beautiful-dnd/issues/436
        // resetServerContext();
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#062c3f" />
                    <link rel="shortcut icon" href="/static/icon.png" />
                    <meta property="og:title" content="Track and Report Project KPIs with KPI.LENS" />
                    <meta property="og:image" content="/static/logo.png" />
                    <meta property="og:site_name" content="Track and Report Project KPIs with KPI.LENS" />
                    <meta property="og:url" content="https://beta.kpilens.com" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Track and Report Project KPIs with KPI.LENS" />
                    <link rel="icon" type="image/png" sizes="64x64" href="/static/logo.png" />
                    <link rel="stylesheet" type="text/css" href="/css/typo.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
