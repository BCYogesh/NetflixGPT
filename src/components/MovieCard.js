import React from 'react'
import { MOVIE_IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath, movieTitle }) => {
    if (!posterPath) return null;
    return (
        <div>
            <div className="w-36 md:w-48 pr-4">
                <img className="rounded-lg" src={MOVIE_IMG_CDN + posterPath} alt={movieTitle} />
            </div>
        </div>
    )
}

export default MovieCard;