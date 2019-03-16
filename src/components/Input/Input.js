// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyled = styled('input')`
    &[type='text'],
    &[type='email'],
    &[type='phone'] {
        display: inline-block;
        outline: none;
        padding: 8px 12px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #cccccc;
    }
`

const Input = ({ type, name, onChange, onBlur, onKeyUp, placeholder, value, disabled, id, ...rest }) => (
    <InputStyled
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        id={id}
        {...rest}
    />
)

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

Input.defaultProps = {
    type: 'text',
    onChange: () => {},
    onBlur: () => {},
    onKeyUp: () => {},
    placeholder: 'Digite um texto',
    disabled: false
}

export default Input;