// Modules
import React from 'react'
import styled from 'styled-components';

const ContainerWrapper = styled('div')`
    padding: 0 15px;
    box-sizing: content-box;
`

const Container = ({ children }) => (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
)

export default Container;