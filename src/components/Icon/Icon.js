// Modules
import React from "react";
import PropTypes from 'prop-types';

// Styles
import styled from "styled-components";

// Svg
import iconsList from './iconsList.svg';

const IconStyle = styled.svg`
    display: block;
    width: ${props => props.theme.spacing[props.iconSize]};
    height: ${props => props.theme.spacing[props.iconSize]};
    fill: ${props => props.theme.colors[props.iconColor]};
`;

const Icon = ({ tag, iconSize, iconColor, }) => (
    <IconStyle
        viewBox="0 0 32 32"
        className={`icon icon-${tag}`}
        iconSize={iconSize}
        iconColor={iconColor}
        id="icon"
    >
        <use xlinkHref={`${iconsList}#icon-${tag}`} />
    </IconStyle>
);

Icon.propTypes = {
    tag: PropTypes.string
}

Icon.defaultProps = {
    iconSize: 'md'
}

export default Icon;