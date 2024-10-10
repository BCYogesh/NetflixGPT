import { useDispatch } from "react-redux";
import { nowPlayingMovies } from "../redux/slice/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = () => {
    // Fetching from TMDB Movies api and update store

    const dispatch = useDispatch();

    const getMovieDataList = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(nowPlayingMovies(json.results));
    };

    useEffect(() => {
        getMovieDataList();
    });
};

export default useNowPlayingMovies;