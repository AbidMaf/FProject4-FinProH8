import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #B00707;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`

const PrimaryButton = ({ children }) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
}

export default PrimaryButton