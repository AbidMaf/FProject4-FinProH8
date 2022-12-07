import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.section`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 16px 0;
    background-color: #000;
`

const Footer = (props) => {
    const { text } = props;
    return (
        <FooterContainer>
            <p>© 2022 Group G</p>
            <p>{ text }</p>
        </FooterContainer>
    )
}

export default Footer