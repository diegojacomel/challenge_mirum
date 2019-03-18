// Modules
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import Input from '../Input/Input';
import Button from '../Button/Button';

// Types
import { EDIT_INTERESTS } from '../../redux/form/types';

const InterestStyled = styled('div')`
    display: block;
`

const InterestTags = styled('div')`
    display: block;
    margin-top: 10px;
    border: 2px dashed #eeeeee;
    width: 600px;
    max-width: 100%;
    padding: 15px 15px 0 15px;
`

const ButtonWrapper = styled('div')`
    display: inline-block;
    margin-bottom: 15px;
    margin-right: 15px;
`

class Interest extends Component {
    state = {
        tags: [],
        typed: ''
    }

    componentDidMount() {
        const { props: { formReducer } } = this;
        const { register: { interest } } = formReducer;

        if (interest && interest.length) {
            this.setState({
                tags: interest
            })
        }
    }

    handleChange = (e) => {
        const { target: { value } } = e;

        this.setState({
            typed: value
        })
    }

    addInterest = (e) => {
        const { state, props: { dispatch, formReducer } } = this;
        const { register: { interest } } = formReducer;
        const { target: { value } } = e;

        if (e.key === 'Enter' && !!state.typed) {
            const tagsJoined = interest;
            tagsJoined.push(value);

            this.setState({
                typed: ''
            })

            dispatch({
                type: EDIT_INTERESTS.SUCCESS,
                tags: tagsJoined
            })
        }
    }

    removeInterest = (index) => {
        const { props: { dispatch, formReducer } } = this;
        const { register: { interest } } = formReducer;
        
        let tagsEdited = interest.filter(x => interest.indexOf(x) !== index);

        dispatch({
            type: EDIT_INTERESTS.SUCCESS,
            tags: tagsEdited
        })
    }

    render() {
        const { state, props: { parentValue, id, name, placeholder, type, formReducer, ...rest } } = this;
        const { register: { interest } } = formReducer;

        return (
            <Fragment>
                <InterestStyled>
                    <Input
                        onKeyUp={e => this.addInterest(e)}
                        onChange={e => this.handleChange(e)}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        type={type}
                        value={state.typed}
                        {...rest}
                    />
                </InterestStyled>
                {!!interest.length
                    ?
                    <InterestTags>
                        {interest.map((tag, indexTag) => (
                            <ButtonWrapper>
                                <Button
                                    key={indexTag}
                                    type="button"
                                    icon="cross"
                                    iconColor="white"
                                    iconSize="sm"
                                    onClick={() => this.removeInterest(indexTag)}
                                >
                                    {tag}
                                </Button>
                            </ButtonWrapper>
                        ))}
                    </InterestTags>
                    :
                    null
                }
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        formReducer: state.formReducer
    }
}

export default connect(mapStateToProps)(Interest);