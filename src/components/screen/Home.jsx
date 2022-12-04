import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { 
    PageContentMargin,
    Movie
} from '../atoms'
import {
    Banner,
    Header
} from '../organisms'

const MoviesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    transform: translateY(-50px);
`

const Home = () => {
    const [movies, setMovies] = useState([])
    const [featuredMovieId, setFeaturedMovieId] = useState(null)
    const [featuredMovie, setFeaturedMovie] = useState({})
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
            console.log('movies ', movies)
        })
    }, [])

    useEffect(() => {
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

    return (
        <>
            <Header />
            <Banner
                image={featuredMovie.Poster}
                title={featuredMovie.Title}
                genres={featuredMovie.Genre}
                plot={featuredMovie.Plot}
            />
            <MoviesContainer>
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
        </>
    )
}

export default Home