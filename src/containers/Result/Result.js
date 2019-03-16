// Modules
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Containers
import Header from '../Header/Header';

// Components
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

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

class Result extends Component {
    state = {}

    renderInterests() {
        const { props: { formReducer } } = this;
        const { register: { interest } } = formReducer;

        return interest.map((val, index) => {
            return (
                <span>
                    {(interest.length - 1) !== index ? `${val}, ` : val}
                </span>
            )
        })
    }

    render() {
        const { props: { formReducer: { register } } } = this;
        const { firstName, lastName, email, phone, uf, radioGroup, interest, files } = register;

        return (
            <ResultWrapper>
                <Header />
                <ContentWrapper>
                    <ContentWrapperSide>
                        <Container>
                            Side
                        </Container>
                    </ContentWrapperSide>
                    <ContentWrapperMain>
                        <Container>
                            {firstName
                                ?
                                <Fragment>
                                    <div>
                                        Eu sou <strong>{firstName} {lastName}</strong> {radioGroup ? <span>e eu tenho mais de <strong>{radioGroup.slice(0, 2)} anos</strong></span> : ''} {email ? <span>e você pode enviar e-mails para <strong>{email}</strong></span> : ''}.
                                        Eu moro no estado do <strong>{uf}</strong>. Eu gosto de <strong>{this.renderInterests()}</strong>.
                                        Por favor me envie newsletter.
                                        Para me contatar ligue no telefone <strong>{phone}</strong>.
                                    </div>
                                    <Button color="success">
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