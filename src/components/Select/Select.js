// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectStyled = styled('select')`
    display: inline-block;
    outline: none;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #cccccc;
`

const Select = ({ type, name, onChange, onBlur, onKeyUp, placeholder, value, disabled, id, children, ...rest }) => (
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