import React from 'react';
import { Heading, Text, Divider, Flex } from '@chakra-ui/core';
import { MainBox, MainWrapper, LinkButton } from '@components/index';
import { RadioBoxField } from '@components/fields';
import theme from '@lib/theme';

export default function View(): JSX.Element {
    const fieldOptions = [
        { fieldName: 'agency', name: 'Agency', tip: 'Monitoring & Evaluation' },
        { fieldName: 'devOrg', name: 'Development Organization', tip: 'Organization' },
    ];

    return (
        <MainWrapper width="100%" alignItems="flex-start" height="100%">
            {/* == image wrapper section === */}
            <MainBox
                bg={theme.custom.main}
                backgroundImage=" url(/layout_pattern.png)"
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
                    How would you use KPILENS
                </Heading>

                <Flex my="10" justifyContent="flex-start">
                    <Divider m="0" pr="2" borderColor="green.500" borderWidth="3px" orientation="vertical" />
                    <Text fontSize="sm">
                        We will use this information to design a better experience for you based on your needs
                    </Text>
                </Flex>

                <Divider />
                <RadioBoxField name="useCase" withTip options={fieldOptions} />

                {/* === form input subsection  === */}
                <MainBox mt="12">
                    <LinkButton
                        href="/setup/organization"
                        mt="4"
                        withIcon
                        analyticName="Click Setup Use Case"
                        buttonName="Continue to Setup"
                    />
                </MainBox>
            </MainBox>
        </MainWrapper>
    );
}
