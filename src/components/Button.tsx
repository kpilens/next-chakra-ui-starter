import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, ButtonGroupProps } from '@chakra-ui/core';

const StyledButton = styled(Button)<{ withIcon: boolean | undefined } | any>`
    border-radius: 4px;
    font-weight: 500;
    min-height: ${(props) => props.theme.custom.buttonHeight};
    height: ${(props) => props.theme.custom.buttonHeight};
    justify-content: ${(props) => (props.withIcon ? 'space-between' : 'center')};
    align-content: center;
`;

interface ISubmitButton extends ButtonGroupProps {
    buttonName: string;
    analyticName?: string;
    isLoading?: boolean;
    useSubmit?: boolean | 'submit' | 'button' | 'reset' | undefined;
    withIcon?: boolean | undefined;
}

export const SubmitButton: React.FC<ISubmitButton> = (props) => {
    const { withIcon, isLoading, buttonName, ...rest } = props;
    return (
        <StyledButton
            withIcon={withIcon}
            variantColor="green"
            type="submit"
            isLoading={isLoading}
            rightIcon={(withIcon && 'arrow-forward') || 'arrow-forward'}
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
    const { withIcon, href, isLoading, buttonName, ...rest } = props;


    return (
        <Link href={href} as={href}>
            <StyledButton
                withIcon={withIcon}
                variantColor="green"
                isLoading={isLoading}
                rightIcon={(withIcon && 'arrow-forward') || 'arrow-forward'}
                width="100%"
                {...rest}
            >
                {buttonName}
            </StyledButton>
        </Link>
    );
};

export const ActionButton: React.FC<ILinkButton> = (props) => {
    const { withIcon, href, isLoading, buttonName, ...rest } = props;

    return (
        <Link href={href} as={href}>
            <StyledButton
                variantColor="green"
                type="submit"
                isLoading={isLoading}
                rightIcon={(withIcon && 'arrow-forward') || 'arrow-forward'}
                width="100%"
                {...rest}
            >
                {buttonName}
            </StyledButton>
        </Link>
    );
};


interface IOptionButtonProps extends ButtonGroupProps {
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
                variantColor="gray"
                isLoading={isLoading}
                width="max-content"
                {...rest}
            >
                {children}
            </Button>
        </Link>
    );
};
