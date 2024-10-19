import React from 'react'
import { MOVIE_IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath, movieTitle }) => {
    if (!posterPath) return null;
    return (
        <div>
            <div className="w-44 pr-4">
                <img className="rounded-lg" src={MOVIE_IMG_CDN + posterPath} alt={movieTitle} />
            </div>
        </div>
    )
}

export default MovieCard;