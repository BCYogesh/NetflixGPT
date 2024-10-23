import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { gptMovieNames, gptMovies } = useSelector((store) => store.gpt);
    if (!gptMovieNames) return null;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-80 min-h-screen">
            <div>
                {gptMovieNames.map((movieName, index) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={gptMovies[index]?.results}
                    />
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;
