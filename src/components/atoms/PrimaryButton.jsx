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
    cursor: pointer;
`

const PrimaryButton = ( props ) => {
    const { children, onClick } = props
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}

export default PrimaryButton