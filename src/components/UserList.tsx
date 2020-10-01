import React from 'react';
import Link from 'next/link';
import { Avatar, Text, Icon, Flex, Box, Heading } from '@chakra-ui/core';

interface IUserList {
    customerName: string;
    iconName: string | any;
    date?: Date;
    LinkCard: string;
    PhoneNumber?: number;
    [key: string]: any;
}

export const UserList = (props: IUserList): JSX.Element => {
    const { customerName, iconName, LinkCard, PhoneNumber } = props;

    return (
        <Link href={LinkCard}>
            <Flex
                align="center"
                justify="space-between"
                direction="row"
                py="2"
                borderBottom="1px"
                borderColor="gray.100"
            >
                <Box display="flex" flexDir="row" justifyContent="flex-start">
                    <Avatar name={customerName} size="sm" />
                    <Box flexDir="column" pl="3">
                        <Heading as="h4" size="sm">
                            {customerName}
                        </Heading>
                        <Text fontSize=".75rem">{PhoneNumber}</Text>
                    </Box>
                </Box>

                <Icon name={iconName} size="1rem" color="blue.500" {...props} />
            </Flex>
        </Link>
    );
};

type IUserCard = {
    info: string;
    name?: string;
    onClick?: () => void;
};

export const UserCard = (props: IUserCard): JSX.Element => {
    const { name, info } = props;

    return (
        <Flex
            align="center"
            justify="space-between"
            direction="row"
            py="2"
            borderBottom="1px"
            cursor="pointer"
            borderColor="gray.100"
            {...props}
        >
            <Box display="flex" alignItems="center" flexDir="row" justifyContent="flex-start">
                <Avatar name={name || info} size="sm" />
                <Box flexDir="column" pl="3" alignItems="center">
                    {name && (
                        <Heading as="h6" fontWeight="normal" size="xs">
                            {name}
                        </Heading>
                    )}
                    <Text fontSize="sm">{info}</Text>
                </Box>
            </Box>
            <Icon name="close" size=".5rem" color="green.500" />
        </Flex>
    );
};
