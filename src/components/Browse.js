import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Main from './Main';
import Secondary from './Secondary';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpcoming';


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpComing();


    return (
        <div>
            <Header />
            <Main />
            <Secondary />
        </div>
    )
}

export default Browse;