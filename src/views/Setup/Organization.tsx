import React from 'react';
import { Heading, Text, Divider, Flex } from '@chakra-ui/core';
import { MainBox, MainWrapper, LinkButton } from '@components/index';
import { InputField, SelectField } from '@components/fields';
import theme from '@lib/theme';
import { useForm } from 'react-hook-form';

export default function View(): JSX.Element {
    const { register } = useForm();
    const fieldOptions = {
        employees: ['1 - 10', '11 - 50', '51 - 100', '100 - 1000', '1000+'],
        countries: ['Ghana', 'Kenya', 'South Africa'],
        states: ['Accra', 'Tema', 'Kumasi'],
    };

    return (
        <MainWrapper width="100%" alignItems="flex-start" height="100%">
            {/* == image wrapper section === */}
            <MainBox
                bg={theme.custom.main}
                backgroundImage=" url(/layout_pattern.png)"
                minHeight="100vh"
                height="100%"
                position="fixed"
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
                py={8}
                alignItems="center"
                justifyContent="center"
                boxShadow={theme.custom.defaultShadow}
                borderRadius={theme.custom.defaultRadius}
            >
                <Heading as="h1" fontWeight="500" size="lg">
                    Create your Organization
                </Heading>

                <Flex my="10" justifyContent="flex-start">
                    <Divider m="0" pr="2" borderColor="green.500" borderWidth="3px" orientation="vertical" />
                    <Text fontSize="sm">We designed a better experience for you based on your needs</Text>
                </Flex>

                <Divider />
                <InputField
                    register={register}
                    label="Organization Name"
                    placeholder="Mastercard Foundation"
                    name="orgName"
                />
                <SelectField
                    ref={register}
                    label="Employees"
                    options={fieldOptions.employees}
                    placeholder="1 - 10"
                    name="employees"
                />
                <SelectField
                    label="Country"
                    options={fieldOptions.countries}
                    placeholder="select your country"
                    name="country"
                    ref={register}
                />
                <SelectField
                    ref={register}
                    label="State"
                    options={fieldOptions.states}
                    placeholder="select your state"
                    name="state"
                />

                {/* === form input subsection  === */}
                <MainBox mt="12">
                    <LinkButton
                        href="/setup/case"
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
