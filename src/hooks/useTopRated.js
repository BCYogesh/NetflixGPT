import { useDispatch, useSelector } from "react-redux";
import { topRatedMovies } from "../redux/slice/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRated = () => {
    // Fetching from TMDB Movies api and update store
    const topRatedMoviesData = useSelector(
        (store) => store.movies.topRatedMovies
    );
    const dispatch = useDispatch();

    const getMovieDataList = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(topRatedMovies(json.results));
    };

    useEffect(() => {
        if (!topRatedMoviesData) getMovieDataList();
    }, []);
};

export default useTopRated;
