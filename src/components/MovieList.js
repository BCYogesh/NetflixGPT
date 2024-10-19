import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) return;

    return (
        <div className="p-2">
            <h1 className="text-3xl text-white">{title}</h1>
            <div className="mt-4">
                <div className="flex overflow-x-scroll no-scrollbar">
                    {
                        movies?.map(movie => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} movieTitle={movie.title} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default MovieList