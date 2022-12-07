import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { 
    PageContentMargin,
    Movie
} from '../atoms'
import {
    Banner,
    Header, 
    Footer
} from '../organisms'

const MoviesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    /* scroll-behavior: smooth; */
    transition: all 0.5s ease-in-out;
    transform: translateY(-50px);
    padding: 1vh 0;
    white-space: nowrap;
`

const Home = () => {
    const [movies, setMovies] = useState([])
    const [featuredMovieId, setFeaturedMovieId] = useState(null)
    const [featuredMovie, setFeaturedMovie] = useState({})
    const movieContainer = useRef(null)

    const API_KEY = '89604591';
    
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY
        }&s=batman`)
        .then(res => {
            const fetchMovies = res.data.Search
            setFeaturedMovieId(fetchMovies[0].imdbID)
            const setFocus = {focus: false}
            const modifiedMovies = fetchMovies.map(movie => {
                return {...movie, ...setFocus}
            })
            setMovies(modifiedMovies)
            // console.log('movies ', movies)
        })
    }, [])

    useEffect(() => {
        if(featuredMovieId === null) return
        axios.get(`http://www.omdbapi.com/`, {
            params: {
                i: featuredMovieId,
                apikey: API_KEY,
            }
        })
        .then(res => {
            const movie = res.data
            // console.log('featured movie ', movie)
            const changeFocus = movies.map(movie => {
                if (movie.imdbID === featuredMovieId) {
                    return {...movie, focus: true}
                } else {
                    return {...movie, focus: false}
                }
            })
            setMovies(changeFocus)
            setFeaturedMovie(movie)
        })
    }, [featuredMovieId])

    const containerOnMouseEnter = e => {
        // document.body.style.overflowY = 'hidden'
        movieContainer.current.addEventListener('wheel', e => {
            e.preventDefault()
            movieContainer.current.scrollLeft += e.deltaY
        })
    }

    const containerOnMouseLeave = e => {
        document.body.style.overflowY = 'auto'
        // movieContainer.addEventListener('wheen', e => {
        //     e.preventDefault()
        //     movieContainer.current.scrollLeft = 0
        // })
    }

    return (
        <>
            <Header />
            <Banner
                image={featuredMovie.Poster}
                title={featuredMovie.Title}
                genres={featuredMovie.Genre}
                plot={featuredMovie.Plot}
            />
            <MoviesContainer
            ref={movieContainer}
            onMouseEnter={e => containerOnMouseEnter(e)}
            onMouseLeave={e => containerOnMouseLeave(e)}>
                {movies?.map((movie) => (
                    <Movie
                        isFocused={movie.focus}
                        key={movie.imdbID}
                        image={movie.Poster}
                        title={movie.Title}
                        year={movie.Year}
                        onClick={() => setFeaturedMovieId(movie.imdbID)}
                        // onClick={() => changeFocus(movie.imdbID)}
                    />
                ))}
            </MoviesContainer>
            <Footer
                text='Home page made by Abid Mafahim'
            />
        </>
    )
}

export default Home