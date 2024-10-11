import { useDispatch } from "react-redux";
import { topRatedMovies } from "../redux/slice/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTopRated = () => {
    // Fetching from TMDB Movies api and update store

    const dispatch = useDispatch();

    const getMovieDataList = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(topRatedMovies(json.results));
    };

    useEffect(() => {
        getMovieDataList();
    });
};

export default useTopRated;