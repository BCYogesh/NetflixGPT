import { useDispatch, useSelector } from "react-redux";
import { upComingMovies } from "../redux/slice/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
    // Fetching from TMDB Movies api and update store
    const upComingMoviesData = useSelector(
        (store) => store.movies.upComingMovies
    );
    const dispatch = useDispatch();

    const getMovieDataList = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(upComingMovies(json.results));
    };

    useEffect(() => {
        if (!upComingMoviesData) getMovieDataList();
    }, []);
};

export default useUpComingMovies;
