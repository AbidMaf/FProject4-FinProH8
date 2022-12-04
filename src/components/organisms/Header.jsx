import React from 'react'
import styled from 'styled-components'
import SearchForm from '../molecules/SearchForm'
import Logo from '../../assets/Logo.svg'

const Container = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    padding: 1rem 0;
    height: 6vh;
    background: linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%);;
    color: white;
`

const LayoutFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
`

const LogoType = styled.img`
    max-height: 4vh;
`

const Header = () => {
    return (
        <Container>
            <LayoutFlex>
                <LogoType src={Logo} alt="logo" />
                <SearchForm onClick={() => alert('add this button action on Header.jsx')} />
            </LayoutFlex>
        </Container>
    )
}

export default Header