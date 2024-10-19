import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Main from "./Main";
import Secondary from "./Secondary";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearchPage from "./GptSearchPage";
import { useDispatch, useSelector } from "react-redux";
import { clearMovieList } from "../redux/slice/gptSlice";

const Browse = () => {
    const showGpt = useSelector((store) => store.gpt.toggleGptView);
    const dispatch = useDispatch();

    if (!showGpt) { dispatch(clearMovieList()) };

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
