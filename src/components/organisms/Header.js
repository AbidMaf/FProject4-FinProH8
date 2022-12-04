import React from 'react'
import styled from 'styled-components'

import {
    PageContentMargin,
} from '../atoms'

const Container = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 6vh;
    background: linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%);;
    color: white;
`

const Header = () => {
    return (
        <Container>
            <PageContentMargin>

            </PageContentMargin>
        </Container>
    )
}

export default Header