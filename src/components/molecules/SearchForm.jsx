import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../atoms'

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const Input = styled.input`
    padding: 10px 1.6em;
    border: 1px solid #ccc;
    font-size: 14px;
    &:focus {
        outline: none;
    }
`

const SearchForm = (props) => {
    const { onClick } = props
    return (
        <Container>
            <Input type="text" placeholder='Search hovies here' />
            <PrimaryButton onClick={onClick}>Search</PrimaryButton>
        </Container>
    )
}

export default SearchForm