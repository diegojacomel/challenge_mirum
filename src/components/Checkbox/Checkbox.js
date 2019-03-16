// Modules
import React from 'react'
import styled from 'styled-components';

// Components
import Label from '../Label/Label';
import Icon from '../Icon/Icon';

const CheckboxStyled = styled('input')`
    display: block;
    width: 18px;
    height: 18px;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 3px;
    margin: 0 10px 0 0;
    + svg {
        width: 12px;
        position: absolute;
        left: 3px;
        top: 2px;
        fill: ${props => props.theme.colors.primary};
    }
`

const LabelToChackbox = styled(Label)`
    display: flex;
    align-items: center;
    position: relative;
    font-size: 14px;
`

const Checkbox = ({ label, id, name, checked, onChange, disabled, onBlur, ...rest }) => (
    <LabelToChackbox>
        <CheckboxStyled
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            onBlur={onBlur}
            {...rest}
        />
        {label}
        {checked
            ?
            <Icon tag="checkmark" size="sm" />
            :
            null
        }
    </LabelToChackbox>
)

export default Checkbox;