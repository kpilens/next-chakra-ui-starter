import React, { Attributes } from 'react';
import View from 'src/views/Setup/Organization';
import Head from 'next/head';

const Page: React.FC<Attributes> = (props): JSX.Element => {
    return (
        <>
            <Head>
                <title>KPILENS | Setup Organization</title>
            </Head>
            {/* === Reference Component to Render ==== */}
            <View {...props} />
        </>
    );
};

export default Page;
