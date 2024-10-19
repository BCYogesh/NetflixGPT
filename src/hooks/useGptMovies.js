import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import model from "../components/openai";
import { gptMoviesList } from "../redux/slice/gptSlice";

const useGptMovies = (searchInput) => {

    const dispatch = useDispatch();


    const fetchMovieDetailsTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        return json;
    };

    const handleSearchMovieClick = async () => {
        const searchQuery =
            "Act as movie recommendation system, suggest me movies on query: " +
            searchInput.current.value +
            ". Give me only 5 movies separated by commas no other text.";

        const result = await model.generateContent(searchQuery);
        const data = result.response.text();

        const suggestedMovies = data.split(",");
        console.log(suggestedMovies);

        const promiseMovies = suggestedMovies.map((movie) =>
            fetchMovieDetailsTMDB(movie)
        );

        const tmdbResults = await Promise.all(promiseMovies);
        dispatch(gptMoviesList({ gptMovieNamesList: suggestedMovies, gptMovies: tmdbResults }));
        console.log(tmdbResults);

    };
    return handleSearchMovieClick;
}

export default useGptMovies;