// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Container from '../../components/Container/Container';

class Result extends Component {
    state = {}

    render() {
        const { props: { formReducer: { register } } } = this;
        const { firstName, lastName, email, phone, uf, country, files, address, interest, receiveNews } = register;

        return (
            <Container>
                Eu sou {firstName} {lastName} e eu tenho mais de XX anos e você pode enviar e-mails para {email}.
                Eu moro no estado do {uf}. Eu gosto de yy, yy e yy.
                Por favor me envie newsletter.
                Para me contatar ligue no telefone {phone}.
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        formReducer: state.formReducer
    }
}

export default connect(mapStateToProps)(Result);