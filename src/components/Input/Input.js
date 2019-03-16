// Modules
import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputMask from 'react-input-mask';

const InputStyled = styled(InputMask)`
    &[type='text'],
    &[type='email'],
    &[type='phone'] {
        display: inline-block;
        outline: none;
        padding: 8px 12px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #cccccc;
        width: 550px;
        max-width: 100%;
        box-sizing: border-box;
    }
`

const MessageValidation = styled('div')`
    font-size: 12px;
    color: #d30;
`

const Input = ({ type, name, onChange, onBlur, onKeyUp, placeholder, value, disabled, id, mask, errors, touched, ...rest }) => (
    <Fragment>   
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
            mask={mask}
            {...rest}
        />
        {errors && touched &&
            <MessageValidation>
                {errors}
            </MessageValidation>
        }
    </Fragment>
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