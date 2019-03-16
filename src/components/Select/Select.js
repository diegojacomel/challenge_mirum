// Modules
import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Icon from '../Icon/Icon';

const SelectWrapper = styled('div')`
    display: inline-block;
    position: relative;
    border-radius: 5px;
    border: 1px solid #cccccc;
    overflow: hidden;
    background: ${props => props.theme.colors.white}
    width: 390px;
    max-width: 100%;
`

const SelectStyled = styled('select')`
    display: inline-block;
    outline: none;
    padding: 8px 12px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    padding-right: 40px;
    position: relative;
    border: none;
    z-index: 1;
    background: none;
    width: 100%;
    + svg {
        position: relative;
        z-index: 0;
        width: 25px;
        height: 25px;    
        position: absolute;
        right: 5px;
        top: 5px;
        fill: ${props => props.theme.colors.primary};
    }
`

const MessageValidation = styled('div')`
    font-size: 12px;
    color: #d30;
`

const Select = ({ type, name, onChange, onBlur, onKeyUp, placeholder, value, disabled, id, children, errors, touched, ...rest }) => (
    <Fragment>
        <SelectWrapper>
            <SelectStyled
                id={id}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                {...rest}
            >
                {children}
            </SelectStyled>
            <Icon tag="angle-down" />
        </SelectWrapper>
        {errors && touched &&
            <MessageValidation>
                {errors}
            </MessageValidation>
        }
    </Fragment>
)

Select.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

Select.defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    placeholder: 'Selecione uma opção',
    disabled: false
}

export default Select;