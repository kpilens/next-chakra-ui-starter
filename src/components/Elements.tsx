import styled from '@emotion/styled';
import { Text } from '@chakra-ui/core';

export const AppIcon = styled.div<{
    src: string;
    theme?: { custom: { green: string } };
}>`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 20px;
    height: 20px;
    background-size: cover;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 0%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
    :hover {
        color: ${(props) => props.theme.custom.green};
        fill: ${(props) => props.theme.custom.green};
        fill-opacity: 0.8;
        opacity: 0.8;
    }
`;

interface IIconBox extends JSX.Element {
    width: string;
    height: string;
    borderRadius: string;
    margin: string;
    backgroundColor: string;
    backgroundSize: string;
    src: string;
}

export const IconBox = styled.div<IIconBox>`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.width ? props.width : '50px')};
    height: ${(props) => (props.height ? props.height : '50px')};
    background-size: cover;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0px')};
    margin: ${(props) => (props.margin ? props.margin : 'inherit')};
    background-repeat: no-repeat;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    background-position: center;
    background-size: ${(props) => (props.backgroundSize ? props.backgroundSize : 'cover')};
    background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
`;

interface IBreakLayout {
    marginT?: string;
    bg?: string;
    theme?: { custom: { defaultBox: string } };
}
export const BreakLayout = styled.section<IBreakLayout>`
    padding: 0;
    background: ${(props) => (props.bg ? props.bg : 'inherit')};
    margin-top: ${(props) => (props.marginT ? props.marginT : '1.5rem')};
    margin-left: calc(-${(props) => props.theme.custom.defaultBox});
    margin-right: calc(-${(props) => props.theme.custom.defaultBox});
`;

interface ILineDivider {
    theme?: { custom: { defaultBox: string } };
}
export const LineDivider = styled.div<ILineDivider>`
    height: 0.8px;
    padding: 0px;
    margin: 0;
    margin-left: calc(-${(props) => props.theme.custom.defaultBox});
    margin-right: calc(-${(props) => props.theme.custom.defaultBox});
    background: #eee;
`;

export const StatusText = styled(Text)<{ fsize?: string; lineHeight?: string }>`
    margin: 0;
    padding: 0;
    font-size: ${(props) => (props.fsize ? props.fsize : '.65rem')};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '7px')};
    text-transform: uppercase;
`;

export const Paragraph = styled(Text)<{ fsize?: string; lineHeight?: string }>`
    margin: 0;
    padding: 0;
    font-size: ${(props) => (props.fsize ? props.fsize : '.75rem')};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '100%')};
`;

export const ButtonText = styled(Text)<{ fsize?: string; lineHeight?: string; fw?: string }>`
    margin: 0;
    padding: 0;
    font-weight: ${(props) => (props.fw ? props.fw : '500')};
    font-size: ${(props) => (props.fsize ? props.fsize : '.75rem')};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '100%')};
`;
