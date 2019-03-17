// Modules
import React from 'react'
import styled from 'styled-components';

// Components
import Radio from '../Radio/Radio';

const RadioGroupWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    max-width: 100%;
    position: relative;
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${props => props.theme.colors.primary}
        position: absolute;
        max-width: 100%;
        width: 350px;
        top: 8px;
        z-index: 0;
        left: 15px;
    }
    & input[type="radio"] {
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
`

const arrayAges = [
    '13-19',
    '20-29',
    '30-45',
    '45 e acima'
]

const RadioGroup = ({ onChange, onBlur, id, name }) => (
    <RadioGroupWrapper>
        {arrayAges.map((age, index) => {
            return (
                <Radio
                    key={index}
                    label={age}
                    id={id}
                    name={name}
                    value={age}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )
        })}
    </RadioGroupWrapper>
)

export default RadioGroup;