import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { 
    PageContentMargin,
} from '../atoms'
import {
    Banner,
    Header
} from '../organisms'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [featuredMovie, setFeaturedMovie] = useState({})
    const API_KEY = '89604591';
    
    // useEffect(() => {
    //     axios.get(`http://www.omdbapi.com/?apikey=${API_KEY
    //     }&s=batman`)
    //     .then(res => {
    //         const movies = res.data.Search
    //         setMovies(movies)
    //     })
    // }, [])

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/`, {
            params: {
                i: 'tt3896198',
                apikey: API_KEY,
            }
        })
        .then(res => {
            const movie = res.data
            console.log('featured movie ', movie)
            setFeaturedMovie(movie)
        })
    }, [])

    return (
        <>
            <Header />
            <Banner
                image={featuredMovie.Poster}
                title={featuredMovie.Title}
                genres={featuredMovie.Genre}
                plot={featuredMovie.Plot}
            />
        </>
    )
}

export default Home