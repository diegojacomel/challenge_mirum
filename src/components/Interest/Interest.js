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
    display: block
`

const InterestTags = styled('div')`
    display: block;
    margin-top: 10px;
    border: 2px dashed #eeeeee;
    width: 600px;
    max-width: 100%;
    padding: 15px;
`

class Interest extends Component {
    state = {
        tags: [],
        typed: ''
    }

    handleChange = (e) => {
        const { target: { value } } = e;

        this.setState({
            typed: value
        })
    }

    addInterest = (e) => {
        const { state, props: { dispatch } } = this;
        const { target: { value } } = e;

        if (e.key === 'Enter' && !!state.typed) {
            let tagsJoined = state.tags.concat(value);

            this.setState({
                ...state,
                typed: '',
                tags: tagsJoined
            })

            dispatch({
                type: EDIT_INTERESTS.SUCCESS,
                tags: tagsJoined
            })
        }
    }

    removeInterest = (index) => {
        const { state, props: { dispatch } } = this;
        
        let tagsEdited = state.tags.filter(x => state.tags.indexOf(x) !== index);

        this.setState({
            tags: tagsEdited
        })

        dispatch({
            type: EDIT_INTERESTS.SUCCESS,
            tags: tagsEdited
        })
    }

    render() {
        const { state } = this;

        return (
            <Fragment>
                <InterestStyled>
                    <Input
                        onKeyUp={e => this.addInterest(e)}
                        onChange={e => this.handleChange(e)}
                        value={state.typed}
                    />
                </InterestStyled>
                {!!state.tags.length
                    ?
                    <InterestTags>
                        {state.tags.map((tag, indexTag) => (
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
