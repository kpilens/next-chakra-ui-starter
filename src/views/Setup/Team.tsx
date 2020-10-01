import React from 'react';
import { Heading, Text, Divider, Flex, Link } from '@chakra-ui/core';
import { MainBox, MainWrapper, UserCard, LinkButton } from '@components/index';
import { InputField } from '@components/fields';
import theme from '@lib/theme';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

const StyledLink = styled(Link)`
    border-bottom: 2px solid;
    color: ${theme.custom.green};
    display: flex;
    width: max-content;
    margin-top: 10px;
    font-size: 14px;
    height: 24px;
    justify-content: flex-end;
    transition: cubic-bezier(0.165, 0.84, 0.8, 1) 0.1s;
    &:hover {
        opacity: 0.8;
        font-weight: 500;
        font-size: 88%;
        text-decoration: none;
    }
`;

export default function View(): JSX.Element {
    const { register } = useForm();
    // const fieldOptions = {
    //     employees: ['1 - 10', '11 - 50', '51 - 100', '100 - 1000', '1000+'],
    //     countries: ['Ghana', 'Kenya', 'South Africa'],
    //     states: ['Accra', 'Tema', 'Kumasi'],
    // };

    return (
        <MainWrapper width="100%" alignItems="flex-start" height="100%">
            {/* == image wrapper section === */}
            <MainBox
                bg={theme.custom.main}
                backgroundImage=" url(/layout_pattern.png)"
                position="fixed"
                minHeight="100vh"
                height="100%"
                width="3%"
                p={4}
            ></MainBox>

            {/* === section to render the form ==== */}
            <MainBox
                width="30rem"
                bg={'white'}
                margin={'auto'}
                my="10"
                px={10}
                py={10}
                alignItems="center"
                justifyContent="center"
                boxShadow={theme.custom.defaultShadow}
                borderRadius={theme.custom.defaultRadius}
            >
                <Heading as="h1" fontWeight="500" size="lg">
                    Invite Team Members
                </Heading>

                <Flex my="10" justifyContent="flex-start">
                    <Divider m="0" pr="2" borderColor="green.500" borderWidth="3px" orientation="vertical" />
                    <Text fontSize="sm">
                        Choose to collaborate with your team members, track their progress and increase productivity
                    </Text>
                </Flex>

                <Divider />
                {/* <Text fontSize="md">Add Team Mate</Text> */}
                <InputField
                    register={register}
                    label="Type an email to invite"
                    placeholder="jane@kpilens.com"
                    name="team"
                    type="email"
                />
                <MainBox display="flex" textAlign="right" justifyContent="flex-start" mt="1">
                    {/* == CHAKRA has a useClipboard Hook:: use it here == */}
                    <StyledLink href="#">Copy Invite Link &#x1F517;</StyledLink>
                </MainBox>

                {/* ==== Section to preview input emails ===== */}
                <MainBox mt="8">
                    <Text fontSize="md">Members</Text>
                    <Divider mb="5" />
                    <UserCard info="rubik@kpilens.com" />
                    <UserCard info="yalberta@kpilens.com" />
                </MainBox>

                {/* === form input subsection  === */}
                <MainBox mt="12">
                    <LinkButton
                        href="/"
                        mt="4"
                        withIcon
                        analyticName="Click Invite Team"
                        buttonName="Setup your Workspace"
                    />
                </MainBox>
            </MainBox>
        </MainWrapper>
    );
}
