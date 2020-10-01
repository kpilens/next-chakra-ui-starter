import React, { Attributes } from 'react';
import View from 'src/views/Setup/Case';
import Head from 'next/head';

const Page: React.FC<Attributes> = (props): JSX.Element => {
    return (
        <>
            <Head>
                <title>KPI Lens | Setup</title>
            </Head>
            {/* === Reference Component to Render ==== */}
            <View {...props} />
        </>
    );
};

export default Page;
