/**
 * This File will house the Form Fields that would be re-used across the project
 * This will be the Fields Hook that extends input functionality into chakra form fields
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/core';

type RefReturnType =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | any;
type RHInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturnType;
};

// interface InputFieldProps extends InputProps {
//     name: string;
//     placeholder: string;
//     type?: string;
//     label: string,
//     register: ({ required }: { required?: boolean }) => RefReturnType;
// }

const InputLabel = styled(FormLabel)<{ fsize?: string }>`
    font-size: ${(props) => (props.fsize ? props.fsize : '11px')};
    transition: ease-in 0.2s;
    padding-right: 10px;
`;

const TextInput = styled(Input)<any>`
    border-width: 1.3px;
    border-radius: 4px;
    min-height: ${(props) => props.theme.custom.buttonHeight};
    width: 100%;
    font-size: ${(props: any) => props.theme.custom.inputFontSize};
    ::placeholder,
    ::-moz-placeholder {
        font-size: ${(props: any) => props.theme.custom.inputPlaceHolder};
        vertical-align: middle;
    }
`;

export const InputField: React.FC<RHInputProps> = (props): JSX.Element => {
    const { type, name, placeholder, label, register, required, ...rest } = props;

    return (
        <div>
            <InputLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600" mt="3">
                {label}
            </InputLabel>
            <InputGroup size="lg">
                <TextInput
                    {...rest}
                    type={type || 'text'}
                    ref={register({ required })}
                    name={name}
                    variant="filled"
                    id={[name, 'input'].join('-')}
                    placeholder={placeholder}
                    focusBorderColor="gray.500"
                    borderColor="gray.500"
                    errorBorderColor="red.500"
                    size="lg"
                />
            </InputGroup>
        </div>
    );
};
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

/** =====================================
 * Form Field for Password Inputs
 =============================================================================*/
export const PasswordField = (props: RHInputProps): JSX.Element => {
    const { name, placeholder, label, register, required } = props;
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormControl mt="3" position="relative">
            <InputLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600">
                {label}
            </InputLabel>
            <InputGroup size="lg">
                <TextInput
                    type={show ? 'text' : 'password'}
                    isFullWidth
                    variant="filled"
                    ref={register({ required })}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    focusBorderColor="gray.500"
                    borderColor="gray.500"
                    errorBorderColor="red.500"
                    size="lg"
                />
                <InputRightElement width="4.5rem" pt="1">
                    <IconButton
                        variant="outline"
                        size="sm"
                        isRound
                        aria-label="Reveal Password"
                        icon={show ? 'view' : 'view-off'}
                        onClick={handleClick}
                    />
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
};
PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};
