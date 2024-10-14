import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Main from "./Main";
import Secondary from "./Secondary";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGpt = useSelector((store) => store.gpt.toggleGptView);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpComingMovies();

    return (
        <div>
            <Header />
            {showGpt ? <GptSearchPage /> :
                <>
                    <Main />
                    <Secondary />
                </>
            }
        </div>
    );
};

export default Browse;
