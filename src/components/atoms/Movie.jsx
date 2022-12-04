import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled.div`
    cursor: pointer;
    aspect-ratio: 1 / 1.4142;
    width: 100%;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: .5s;
    border: 3px solid rgba(252, 252, 252, 0);
    &:hover {
        opacity: 0.5;
    }
`

const Movie = (props) => {
    const { isFocused, image, title, genres, plot, onClick } = props
    return (
        <ImageStyled image={image} className={isFocused ? 'focused' : ''} onClick={onClick}>
            <img src={image} alt={title} style={{visibility: 'hidden'}} />
        </ImageStyled>   
    )
}

export default Movie