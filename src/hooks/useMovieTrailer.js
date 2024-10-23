import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailervideo } from "../redux/slice/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const trailerData = useSelector((store) => store.movies.addTrailervideo);
    const dispatch = useDispatch();
    const getTrailerMovie = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(json);
        const filterData = json.results.filter(
            (movies) => movies.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailervideo(trailer));
        //console.log(trailerKey);
    };

    useEffect(() => {
        if (!trailerData) getTrailerMovie();
    }, []);
}

export default useMovieTrailer;

