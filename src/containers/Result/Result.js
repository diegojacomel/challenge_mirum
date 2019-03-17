// Modules
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Containers
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

// Components
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

// Types
import { SEND_POST } from '../../redux/form/types';

const ResultWrapper = styled('div')`
    display: block;
`

const ContentWrapper = styled('div')`
    display: flex;
    align-items: stretch;
`

const ContentWrapperSide = styled('div')`
    width: 300px;
    padding-top: 40px;
    height: calc(100vh - 140px);
`

const ContentWrapperMain = styled('div')`
    width: calc(100% - 300px);
    padding-top: 40px;
    padding-bottom: 30px;
    background: #f9f9f9;
    min-height: calc(100vh - 140px);
`

const Content = styled('div')`
    margin-bottom: 30px;
`

class Result extends Component {
    state = {}

    renderInterests() {
        const { props: { formReducer } } = this;
        const { register: { interest } } = formReducer;

        return interest.map((val, index) => {
            return (
                <span key={index}>
                    {(interest.length - 1) !== index ? `${val}, ` : val}
                </span>
            )
        })
    }

    handleSubmit = () => {
        const { props: { dispatch, formReducer: { register } } } = this;

        dispatch({
            type: SEND_POST.REQUEST,
            register
        })
    }

    render() {
        const { props: { formReducer: { register } } } = this;
        const { firstName, lastName, email, phone, uf, radioGroup } = register;

        return (
            <ResultWrapper>
                <Header />
                <ContentWrapper>
                    <ContentWrapperSide>
                        <Container>
                            <Sidebar />
                        </Container>
                    </ContentWrapperSide>
                    <ContentWrapperMain>
                        <Container>
                            {firstName
                                ?
                                <Fragment>
                                    <Content>
                                        Eu sou <strong>{firstName} {lastName}</strong> {radioGroup ? <span>e eu tenho mais de <strong>{radioGroup.slice(0, 2)} anos</strong></span> : ''} {email ? <span>e você pode enviar e-mails para <strong>{email}</strong></span> : ''}.
                                        Eu moro no estado do <strong>{uf}</strong>. Eu gosto de <strong>{this.renderInterests()}</strong>.
                                        Por favor me envie newsletter.
                                        Para me contatar ligue no telefone <strong>{phone}</strong>.
                                    </Content>
                                    <Button
                                        type="submit"
                                        color="success"
                                        size='lg'
                                        onClick={this.handleSubmit}
                                    >
                                        Enviar
                                    </Button>
                                </Fragment>
                                :
                                null
                            }
                        </Container>
                    </ContentWrapperMain>
                </ContentWrapper>
            </ResultWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        formReducer: state.formReducer
    }
}

export default connect(mapStateToProps)(Result);