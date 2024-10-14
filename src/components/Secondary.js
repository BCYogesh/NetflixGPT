import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondary = () => {

    const movies = useSelector((store) => store.movies);


    return (
        <div className="bg-black w-screen">
            <div className="-mt-72 relative z-20 px-8 no-scrollbar">
                <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
            </div>
        </div>
    )
}

export default Secondary