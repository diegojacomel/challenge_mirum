// Modules
import React from 'react'
import styled from 'styled-components';

// Components
import Container from '../../components/Container/Container';

const HeaderStyled = styled('header')`
    padding: 15px;
    background: #f2f2f2;
`

const TitleStyled = styled('h1')`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`

const Header = () => (
    <HeaderStyled>
        <Container>
            <TitleStyled>
                Challenge Mirum Agency
            </TitleStyled>
        </Container>
    </HeaderStyled>
)

export default Header;