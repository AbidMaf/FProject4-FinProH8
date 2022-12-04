import React from 'react'
import styled from 'styled-components'

import {
    PageContentMargin,
} from '../atoms'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 72vh;
    
    background-image: url(${props => props.url});
    mask-image: linear-gradient(180deg, rgba(17,17,17,1) 70%, rgba(17,17,17,.5) 80%, rgba(17,17,17,0) 100%);;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const InfoSeciton = styled.section`
    /* background-color: red; */
    /* background-color: ; */
    background: linear-gradient(90deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,0) 100%);
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const GenreSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: fit-content;
`

const GenreSeparator = styled.div`
    margin: 0;
    width: 2px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 4.5rem;
    font-weight: 700;
    text-align: left;
    margin-bottom: 0.4em;
    margin-top: 0;
    max-width: 70%;
`

const Plot = styled.p`
    max-width: 70%;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: left;
`

const Banner = (props) => {
    const {
        image,
        title,
        genres,
        plot
    } = props

    // console.log('genres ', genres)

    const separatedGenre = genres.split(', ')

    return (
        <Container url={image}>
            <InfoSeciton>
                <PageContentMargin>
                    <GenreSection>
                        {
                            separatedGenre.map((genre, index) => ([
                                <>
                                    <span key={index}>{genre}</span>
                                    {index !== separatedGenre.length - 1 && <GenreSeparator />}
                                </>
                            ]))
                        }
                    </GenreSection>
                    <Title>{title}</Title>
                    <Plot>{plot}</Plot>
                </PageContentMargin>
            </InfoSeciton>
        </Container>
    )
}

Banner.defaultProps = {
    image: 'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
    genres: "",
}

export default Banner