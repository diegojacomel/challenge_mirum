// Modules
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// Components
import Thumbnail from '../../components/Thumbnail/Thumbnail';

// Types
import { UPLOAD_THUMBNAIL } from '../../redux/form/types';

const SidebarWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const InputFileWrapper = styled('label')`
    background: #eeeeee;
    padding: 5px 15px;
    border-radius: 3px;
    text-align: center;
    margin-top: 15px;
    font-size: 13px;
    cursor: pointer;
    &:hover {
        background: #dddddd;
    }
`

const InputStyled = styled('input')`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`

const LinkStyled = styled(Link)`
    background: #eeeeee;
    padding: 5px 15px;
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.greyDark}
    margin-top: 15px;
    font-size: 13px;
    &:hover {
        background: #dddddd;
    }
`

class Sidebar extends Component {
    state = {
        file: null,
    }

    handleChange = (e) => {
        const { props: { dispatch } } = this;
        const objectImage = e.target.files[0];

        if (objectImage) {
            this.setState({
                file: URL.createObjectURL(objectImage)
            })

            dispatch({
                type: UPLOAD_THUMBNAIL.SUCCESS,
                thumbnail: URL.createObjectURL(objectImage)
            })
        }
    }

    render() {
        const { props: { formReducer, location } } = this;
        const { register: { thumbnail } } = formReducer;

        return (
            <SidebarWrapper>
                <Thumbnail image={thumbnail} />
                <InputFileWrapper>
                    <InputStyled type="file" onChange={(e) => this.handleChange(e)} />
                    {thumbnail.length
                        ?
                        'Editar foto de perfil'
                        :
                        'Insira uma foto de perfil'
                    }
                </InputFileWrapper>
                {location.pathname === '/result'
                    ?
                    <LinkStyled to="/register">Editar Perfil</LinkStyled>
                    :
                    null
                }
            </SidebarWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        formReducer: state.formReducer
    }
}

export default withRouter(connect(mapStateToProps)(Sidebar));