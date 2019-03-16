// Modules
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Containers
import Header from '../Header/Header';

// Components
import Container from '../../components/Container/Container';

const ResultWrapper = styled('div')`
    display: block;
`

class Result extends Component {
    state = {}

    render() {
        const { props: { formReducer: { register } } } = this;
        const { firstName, lastName, email, phone, uf, radioGroup, interest, files } = register;

        return (
            <ResultWrapper>
                <Header />
                <Container>
                    {firstName
                        ?
                        <div>
                            Eu sou <strong>{firstName} {lastName}</strong> {radioGroup ? <span>e eu tenho mais de <strong>{radioGroup.slice(0, 2)} anos</strong></span> : ''} {email ? <span>e você pode enviar e-mails para <strong>{email}</strong></span> : ''}.
                            Eu moro no estado do <strong>{uf}</strong>. Eu gosto de <strong>1, 2, 3</strong>.
                            Por favor me envie newsletter.
                            Para me contatar ligue no telefone <strong>{phone}</strong>.
                        </div>
                        :
                        null
                    }
                </Container>
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

// ${interest.map(val => ( <span>{val}</span> ))}.