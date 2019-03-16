// Modules
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// Containers
import Header from '../Header/Header';

// Components
import Button from '../../components/Button/Button'; 

const HomeWrapper = styled('main')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
`

class Home extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <Header />
                <HomeWrapper>
                    <Button color="default" rounded="md" size="xg" linkTo="/register">
                        Cadastrar
                    </Button>
                </HomeWrapper>
            </Fragment>
        );
    }
}

export default Home;