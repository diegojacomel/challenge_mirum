// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Button from '../../components/Button/Button'; 

const HomeWrapper = styled('main')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

class Home extends Component {
    state = {}

    render() {
        return (
            <HomeWrapper>
                <Button color="default" rounded="md" size="xg" linkTo="/register">
                    Home
                </Button>
            </HomeWrapper>
        );
    }
}

export default Home;