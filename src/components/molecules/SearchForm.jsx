import axios from 'axios'
// import React from 'react'
import React, { useEffect, useState } from 'react'
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

const SearchForm = ({setSearching}) => {
    // const { onClick } = props

    const [search, setSearch] = useState();
    const API_KEY = '89604591';
    // const [timeoutId, updateTimeoutId] = useState();

    const onTextChange = (event) => {
        // console.log(event.target.value);
        setSearch(event.target.value)
        // const timeout = setTimeout(() => console.log('API call'), 500);
        // updateSearchQuery(timeout);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            if (search) {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY
            }&s=${search}`) 

            setSearching(search)
            console.log(response, '<== response handle submit')
            }
        
        } catch (error) {
            console.log(error, 'error submit')
        }
    }

    return (
        <Container>
            <Input onChange={onTextChange} type="text" placeholder='Search hovies here' />
            <PrimaryButton onClick={handleSubmit}>Search</PrimaryButton>
        </Container>
    )
}

export default SearchForm