import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, ButtonProps } from '@chakra-ui/core';

const StyledButton = styled(Button) <any>`
    border-radius: 4px;
    font-weight: 500;
    min-height: ${(props) => props.theme.custom.buttonHeight};
    height: ${(props) => props.theme.custom.buttonHeight};
    justify-content: center;
    align-content: center;
`;

interface ISubmitButton extends ButtonProps {
    buttonName: string;
    isLoading?: boolean;
    useSubmit?: boolean | 'submit' | 'button' | 'reset' | undefined;
}

export const SubmitButton: React.FC<ISubmitButton> = (props) => {
    const { isLoading, buttonName, ...rest } = props;
    return (
        <StyledButton
            colorScheme="green"
            type="submit"
            isLoading={isLoading}
            width="100%"
            {...rest}
        >
            {buttonName}
        </StyledButton>
    );
};

interface ILinkButton extends ISubmitButton {
    href: string;
    handleAction?: () => void;
}

export const LinkButton: React.FC<ILinkButton> = (props) => {
    const { href, isLoading, buttonName, ...rest } = props;

    return (
        <Link href={href} as={href}>
            <StyledButton
                colorScheme="green"
                isLoading={isLoading}
                width="100%"
                {...rest}
            >
                {buttonName}
            </StyledButton>
        </Link>
    );
};

export const ActionButton: React.FC<ILinkButton> = (props) => {
    const { href, isLoading, buttonName, ...rest } = props;

    return (
        <Link href={href} as={href}>
            <StyledButton
                colorScheme="green"
                type="submit"
                isLoading={isLoading}
                width="100%"
                {...rest}
            >
                {buttonName}
            </StyledButton>
        </Link>
    );
};

interface IOptionButtonProps extends ButtonProps {
    href: string;
    children: React.ReactNode;
    analyticName?: string;
    isLoading?: boolean;
    useSubmit?: boolean | 'submit' | 'button' | 'reset' | undefined;
    withIcon?: boolean | undefined;
}

export const OptionButton: React.FC<IOptionButtonProps> = (props) => {
    const { href, isLoading, children, ...rest } = props;

    return (
        <Link href={href} as={href}>
            <Button
                variant="outline"
                justifyContent="flex-start"
                colorScheme="gray"
                isLoading={isLoading}
                width="max-content"
                {...rest}
            >
                {children}
            </Button>
        </Link>
    );
};
