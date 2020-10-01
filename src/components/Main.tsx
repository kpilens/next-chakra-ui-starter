import React from 'react';
import {
    Stack,
    StackProps,
    Heading,
    HeadingProps,
    Box,
    Flex,
    useColorMode,
    FlexProps,
    BoxProps,
} from '@chakra-ui/core';
import Link, { LinkProps } from 'next/link';

// Instantiate Color Mode Vars
const bgColor = { light: 'gray.50', dark: 'gray.900' };
const color = { light: 'black', dark: 'white' };

export const MainStack: React.FC<StackProps> = (props) => (
    <Stack spacing="1.5rem" width="100%" maxWidth="48rem" px="1rem" {...props} />
);

export const MainBox: React.FC<BoxProps> = (props) => {
    return <Box {...props} />;
};

export const MainFlex: React.FC<BoxProps> = (props) => {
    return <Flex {...props} />;
};

export const MainLink: React.FC<LinkProps> = (props) => {
    return <Link {...props} />;
};

export const MainHeading: React.FC<HeadingProps> = (props) => {
    return <Heading fontWeight="500" {...props} />;
};

export const MainWrapper: React.FC<FlexProps> = (props): JSX.Element => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            alignItems="center"
            justifyContent="flex-start"
            // backgroundColor="#fafffd"
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            {...props}
        />
    );
};
