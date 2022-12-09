import React from 'react'
import styled from 'styled-components'

const DivStyled = styled.div`
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
    @media screen and (max-width: 768px) {
        aspect-ratio: 1 / 1.4142;
        max-width: 140px; 
        max-height: 187.988px; 
    }
`

const ImgStyled = styled.img`
    /* width: 100%;
    height: 100%;
    object-fit: cover; */
    /* object-position: center; */
    @media screen and (max-width: 768px) {
        aspect-ratio: 1 / 1.4142;
        max-width: 140px; 
        max-height: 187.988px; 
    }
`

const Movie = (props) => {
    const { isFocused, image, title, genres, plot, onClick } = props
    return (
        <DivStyled image={image} className={isFocused ? 'focused' : ''} onClick={onClick}>
            <ImgStyled src={image} alt={title} style={{visibility: 'hidden'}} />
        </DivStyled>   
    )
}

export default Movie