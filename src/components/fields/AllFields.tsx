/**
 * This File will house the Form Fields that would be re-used across the project
 * This will be the Fields Hook that extends formik functionality into chakra form fields
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
    FormControl,
    Checkbox,
    FormLabel,
    Select,
    RadioButtonGroup,
    Text,
    Button,
    Flex,
    Heading,
    Icon,
} from '@chakra-ui/core';
import theme from '@lib/theme';

const InputLabel = styled(FormLabel) <{ fsize?: string }>`
    font-size: ${(props) => (props.fsize ? props.fsize : '11px')};
    transition: ease-in 0.2s;
    padding-right: 10px;
`;

const SelectInput = styled(Select) <any>`
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

interface ICustomRadio {
    isChecked: boolean;
    isDisabled: boolean;
    name: string;
    value: string;
    children: any;
    [key: string]: any;
}

export const ButtonComponent = React.forwardRef((props: ICustomRadio, ref) => {
    
    // Step 1: Create a component that accepts `isChecked` and `isDisabled` prop
    const { isChecked, children, isDisabled, ...rest } = props;
    return (
        <Button
            ref={ref}
            variantColor={isChecked ? 'red' : 'blue'}
            aria-checked={isChecked}
            width="inherit"
            borderRadius="0"
            m="1"
            ml="0"
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        >
            {children}
        </Button>
    );
});

interface IRadioBoxChildren {
    name: string;
    icon?: string;
    tip?: string;
}
interface ICustomBox extends React.ComponentPropsWithRef<any> {
    isChecked: boolean;
    isDisabled: boolean;
    name: string;
    value: string;
    children: IRadioBoxChildren;
    withTip?: boolean;
    withIcon?: string | undefined;
    [key: string]: any;
}
// Radio Box Field can render as cards with Icons, Text, and still be placed in forms

export const BoxComponent = React.forwardRef<HTMLAnchorElement, ICustomBox>((props, ref) => {
    // Step 1: Create a component that accepts `isChecked` and `isDisabled` prop
    const { isChecked, children, withTip, withIcon, ...rest } = props;
    return (
        <Flex
            ref={ref}
            backgroundColor={isChecked ? 'green.400' : 'gray.100'}
            width="100%"
            borderBottomWidth="2px"
            color={isChecked ? 'white' : 'inherit'}
            flexDir="column"
            aria-checked={isChecked}
            alignItems={withIcon ? 'center' : 'inherit'}
            textAlign={withIcon ? 'center' : 'inherit'}
            justifyContent="center"
            borderRadius={theme.custom.defaultRadius}
            m="2"
            px="3"
            py="4"
            ml="0"
            role="radio"
            {...rest}
        >
            <Heading as="h5" fontWeight="500" size="sm">
                {children.name}
            </Heading>
            {withTip && <Text fontSize="sm">{children.tip}</Text>}
            {withIcon && (
                <Icon name={children.icon ?? ''} my="3" size="2rem" alignSelf="center">
                    {children.icon}
                </Icon>
            )}
        </Flex>
    );
});

type TRadioBoxInput = string | number | undefined | any;
interface IRadioBoxOptions extends IRadioBoxChildren {
    fieldName: string;
}
interface RadioBoxFieldProps {
    name: string;
    options: IRadioBoxOptions[];
    label?: string;
    validate?: () => void;
    handleAction?: (str: TRadioBoxInput) => void;
    withTip?: boolean;
    withIcon?: string | undefined;
    defaultValue?: string;
    flexDir?: 'row' | 'column';
}

// Styles copied from app.segment.com Sources and Destinations
const RadioBoxGroup = styled(RadioButtonGroup)`
    cursor: pointer;
    transition-duration: 150ms;
    position: relative;
    transition-property: box-shadow, transform;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

    & :hover {
        /* box-shadow: rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 8px 10px -4px; */
        transform: translateY(-1.5px);
    }
`;
export const RadioBoxField = (props: RadioBoxFieldProps): JSX.Element => {
    const { name, options, handleAction, flexDir, label, ...rest } = props;

    return (
        <FormControl mt="5" position="relative">
            <FormLabel htmlFor={[name, 'radio-button'].join('__')} color="gray.600">
                {label}
            </FormLabel>

            <RadioBoxGroup
                name={name}
                id={[name, 'radio-button'].join('__')}
                onChange={(val: string | number | undefined) => handleAction && handleAction(val)}
                isInline
                display="flex"
                flexDir={flexDir ?? 'column'}
                {...rest}
            >
                {options &&
                    options.map((val, idx) => {
                        return (
                            <BoxComponent key={[val, idx].join('--')} name={val.name} value={val.fieldName} {...rest}>
                                {val}
                            </BoxComponent>
                        );
                    })}
            </RadioBoxGroup>
        </FormControl>
    );
};

RadioBoxField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    validate: PropTypes.func,
    defaultValue: PropTypes.string,
    options: PropTypes.array.isRequired,
};