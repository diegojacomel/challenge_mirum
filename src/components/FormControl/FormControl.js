// Modules
import React from 'react'
import styled from 'styled-components';

const FormControlWrapper = styled('div')`
    display: block;
    margin-bottom: 10px;
    & > label {
        margin-bottom: 3px;
    }
    & > input {
        &[type='text'],
        &[type='email'],
        &[type='phone'] {
            margin-bottom: 2px;
        }
    }
    & > select {
        margin-bottom: 2px;
    }
`

const FormControl = ({ children }) => (
    <FormControlWrapper>
        {children}
    </FormControlWrapper>
)

export default FormControl;