import { useDispatch, useSelector } from "react-redux";
import { popularMovies } from "../redux/slice/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    // Fetching from TMDB Movies api and update store
    const popularMoviesData = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch();

    const getMovieDataList = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(popularMovies(json.results));
    };

    useEffect(() => {
        if (!popularMoviesData) getMovieDataList();
    }, []);
};

export default usePopularMovies;
