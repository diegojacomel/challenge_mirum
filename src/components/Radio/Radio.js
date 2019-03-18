// Modules
import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Label from '../../components/Label/Label';

const LabelToRadio = styled(Label)`
    font-size: 14px;
`

const RadioStyled = styled('input')`
    display: block;
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.primary};
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    -webkit-appearance: none;
    outline: none;
    &:checked {
        background: ${props => props.theme.colors.primary};
    }
`

const Radio = ({ id, value, parentValue, disabled, label, field }) => (
    <LabelToRadio>
        <RadioStyled
            {...field}
            type="radio"
            id={id}
            checked={value === parentValue}
            value={value}
            disabled={disabled}
        />
        {label}
    </LabelToRadio>
)

Radio.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool
}

Radio.defaultProps = {
    label: 'Label',
    id: '',
    name: '',
    value: '',
    onChange: () => {},
    onBlur: () => {},
    disabled: false
}

export default Radio;

