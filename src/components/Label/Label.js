// Modules
import React from 'react'
import styled from 'styled-components';

const LabelStyled = styled('label')`
    display: block;
    font-size: 16px;
`

const Label = ({ children }) => (
    <LabelStyled>
        {children}
    </LabelStyled>
)

export default Label;