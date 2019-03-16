// Modules
import React, { Fragment } from "react";
import PropTypes from 'prop-types';

// Components
import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';

// Styles
import styled from "styled-components";

const OutlineButton = (theme, outline, color) => {
    if (outline) {
        return `
            border: 1px solid ${color};
            background-color: ${theme.colors.white};
            color: ${color};
            &:hover {
                border: 1px solid ${theme.colors.white};
                background-color: ${color};
                color: ${theme.colors.white};
            }
    `;
    } else {
        return `
            background-color: ${color};
            color: ${theme.colors.white};
    `;
    }
};

const SizeButton = (props) => {
    switch (props.size) {
        case 'xg':
            return `
                padding: ${props.theme.spacing.lg} ${props.theme.spacing.xg};
            `
        case 'lg':
            return `
                padding: ${props.theme.spacing.md} ${props.theme.spacing.xlg};
            `
        case 'md':
            return `
                padding: ${props.theme.spacing.sm} ${props.theme.spacing.lg};
            `
        case 'sm':
            return `
                padding: ${props.theme.spacing.xsm} ${props.theme.spacing.md};
            `
        case 'xs':
            return `
                padding: ${props.theme.spacing.xs} ${props.theme.spacing.sm};
            `
        default:
            return `
                padding: ${props.theme.spacing.sm} ${props.theme.spacing.lg};'
        `
    }
}

const ButtonStyle = styled('button')`
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    line-height: 1;
    transition: all 0.3s;
    margin-right: 15px;
    white-space: nowrap;
    width: ${({ block }) => block ? '100%' : 'initial'};
    border-radius: ${({theme, rounded}) => theme.rounded[rounded]};
    font-size: ${({theme, size}) => theme.fontSize[size]};
    ${({ theme, outline, color }) => OutlineButton(theme, outline, theme.colors[color])};
    ${props => SizeButton(props)};
    &:hover {
        ${({ theme, outline, color }) => OutlineButton(theme, outline, theme.colors.hover[color])};
    }
    &:last-child {
        margin-right: 0;
    }
    & > span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: ${({ iconLeft }) => iconLeft ? 'row-reverse' : 'row'};
        & > svg {
            margin-left: ${({ iconLeft }) => !iconLeft ? '10px' : '0'};
            margin-right: ${({ iconLeft }) => iconLeft ? '10px' : '0'};
        }
    }
`;

const LinkStyle = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: inherit;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    line-height: 1;
    transition: all 0.3s;
    margin-right: 15px;
    white-space: nowrap;
    padding: 20px 30px;
    border-radius: 5px;
    font-size: 16px;
    color: #666666;
    border: 1px solid #999999;
    background: #eeeeee;
    &:hover {
        background: #999999;
        color: #ffffff;
    }
    &:last-child {
        margin-right: 0;
    }
    & > span {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const Button = ({ children, type, color, outline, size, rounded, block, icon, iconSize, iconColor, iconLeft, disabled, onClick, linkTo }) => (
    <Fragment>
        {!!linkTo
            ?
            <LinkStyle id="testLinkButton" to={linkTo}>
                <span>
                    {children}
                    {icon
                        ?
                        <Icon tag={icon} iconSize={iconSize} iconColor={iconColor} />
                        :
                        null
                    }
                </span>
            </LinkStyle>
            :
            <ButtonStyle
                type={type}
                color={color}
                outline={outline}
                size={size}
                rounded={rounded}
                block={block}
                iconLeft={iconLeft}
                onClick={onClick}
                disabled={disabled}
                id="testButton"
            >
                <span>
                    {children}
                    {icon
                        ?
                        <Icon tag={icon} iconSize={iconSize} iconColor={iconColor} />
                        :
                        null
                    }
                </span>
            </ButtonStyle>
        }
    </Fragment>
);

Button.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.string,
    rounded: PropTypes.string,
    block: PropTypes.bool,
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    iconColor: PropTypes.string,
    disabled: PropTypes.bool,
    linkTo: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    type: 'button',
    color: 'default',
    outline: false,
    size: 'md',
    rounded: 'sm',
    block: false,
    disabled: false,
    linkTo: null,
    onClick: () => console.log('clicked button')
}

export default Button;