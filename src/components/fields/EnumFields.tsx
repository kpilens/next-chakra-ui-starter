/**
 * This File will house the Form Fields that would be re-used across the project
 * This will be the Fields Hook that extends formik functionality into chakra form fields
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {    FormControl,    Checkbox,FormLabel,Select,    Text,    Button,    Flex,    Heading,    Icon} from '@chakra-ui/core';
import theme from '@lib/theme';

const InputLabel = styled(FormLabel)<{ fsize?: string }>`
    font-size: ${(props) => (props.fsize ? props.fsize : '11px')};
    transition: ease-in 0.2s;
    padding-right: 10px;
`;

const SelectInput = styled(Select)<any>`
    border-radius: ${theme.custom.defaultRadius};
    min-height: ${(props) => props.theme.custom.buttonHeight};
    border: 1px solid;
    font-size: ${(props: any) => props.theme.custom.inputFontSize};
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: ${(props: any) => props.theme.custom.inputPlaceHolder};
    }
`;

/**
 * Formik Field for Select options
 */

interface SelectFieldProps {
    name: string;
    options: Array<string>;
    label?: string;
    mt?: string | number;
    placeholder?: string;
    defaultValue?: string;
    validate?: () => void;
}

type Option = {
    label: React.ReactNode;
    value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    options: Option[];
} & HTMLSelectElement;

export const SelectField = React.forwardRef<SelectProps, SelectFieldProps>(
    ({ placeholder, name, mt, defaultValue, options, label }, ref) => {
        return (
            <React.Fragment>
                {label && (
                    <InputLabel mt={mt ?? '3'} htmlFor={[name, 'select'].join('-')} color="gray.600">
                        {label}
                    </InputLabel>
                )}
                <SelectInput
                    ref={ref}
                    variant="filled"
                    placeholder={placeholder}
                    name={name}
                    id={[name, 'select'].join('-')}
                    defaultValue={defaultValue}
                    focusBorderColor="gray.500"
                    borderColor="gray.500"
                    errorBorderColor="red.500"
                    size="lg"
                >
                    {options &&
                        options.map((val, idx) => {
                            return (
                                <option key={`${val}-${idx}`} value={val.toLowerCase()}>
                                    {val}
                                </option>
                            );
                        })}
                </SelectInput>
            </React.Fragment>
        );
    }
);

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    validate: PropTypes.func,
    defaultValue: PropTypes.string,
    options: PropTypes.array.isRequired,
};

/**
 * Field for Checkbox Selections
 */

interface CheckFieldProps {
    name: string;
    boxLabel: string;
    label?: string;
    size?: any;
    isChecked?: boolean;
    validate?: () => void;
}

export const CheckField = (props: CheckFieldProps): JSX.Element => {
    const { boxLabel, size, isChecked, name, label, ...rest } = props;
    return (
        <FormControl mt="3" position="relative">
            {label && (
                <FormLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600">
                    {label}
                </FormLabel>
            )}
            <Checkbox
                isChecked={isChecked}
                size={size}
                id={[name, 'input'].join('-')}
                name={name}
                variantColor="green"
                {...rest}
            >
                {boxLabel}
            </Checkbox>
        </FormControl>
    );
};

CheckField.propTypes = {
    name: PropTypes.string.isRequired,
    boxLabel: PropTypes.string.isRequired,
    label: PropTypes.string,
    validate: PropTypes.func,
    isChecked: PropTypes.bool,
};