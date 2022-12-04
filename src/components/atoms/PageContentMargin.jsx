import React from 'react'
import styled from 'styled-components'

const PageContentMarginStyled = styled.div`
    margin: 0 10vw;
    max-width: 1200px;
    width: 90%;
    @media only screen and (min-width: 768px) {
        margin: 0 8vw;
        width: 95%;
    }
    @media only screen and (min-width: 992px) {
        margin: 0 6vw;
        width: 85%;
    }
`

const PageContentMargin = ({ children }) => {
    return (
        <PageContentMarginStyled>
        {children}
        </PageContentMarginStyled>
    )
}

export default PageContentMargin